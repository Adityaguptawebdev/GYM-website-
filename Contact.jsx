import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = React.useState("");


  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const handeSubmit =async (event) =>{

      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4a403f6c-e10d-4971-8a00-9f008f615b6c");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
  }

  return (
    <section className="contact">
      <form onSubmit={handeSubmit}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            name="name"
            id="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            name="text"
            id="text"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <span>{result}</span>
        <button
          type="submit"
          // disabled={loading}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   gap: "15px",
          // }}
        >
          {/* {loading && <ClipLoader size={20} color="white" />} */}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

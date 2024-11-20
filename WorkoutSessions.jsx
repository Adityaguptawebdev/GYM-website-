import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Experience the ultimate workout sessions tailored just for you! Boost your fitness journey with step-by-step guides, expert tips, and dynamic exercises designed to challenge and inspire. Unleash your potential and stay motivated every step of the way!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Join our exclusive bootcamps designed to push your limits and redefine your fitness goals. Whether you're a beginner or a pro, our expert-led sessions offer intense, result-driven workouts to help you stay ahead in your fitness journey!
        </p>
        <div className="bootcamps">
          <div>
            <h4> Strength Training</h4>
            <p>
           
            Build muscle, boost endurance, and achieve your fitness goals with our expert-guided strength training sessions.
            </p>
          </div>
          <div>
            <h4>  Cardio Workouts</h4>
            <p>
  
            Get your heart racing and your body moving with our high-energy cardio sessions! From dynamic aerobics to intense HIIT (High-Intensity Interval Training), we offer workouts that help you burn calories, improve stamina, and strengthen your cardiovascular system. Perfect for anyone looking to lose weight, increase endurance, or simply enjoy a fun and energetic workout.
            </p>
          </div>
          <div>
            <h4>Flexibility Training</h4>
            <p>
            Discover the benefits of flexibility and mobility with our specialized stretching and yoga sessions. These classes are crafted to help you loosen tight muscles, improve posture, and enhance your range of motion. Ideal for recovery days or to complement your strength and cardio routines, these sessions leave you feeling refreshed and ready to tackle your next challenge.
            </p>
          </div>
          <div>
            <h4>       High-Intensity Bootcamps</h4>
            <p>
            Transform your fitness journey with our high-intensity bootcamps. These action-packed sessions combine strength, cardio, and agility drills to push you to your limits. Designed to maximize calorie burn and build full-body strength, our bootcamps are perfect for those who love a challenge and want fast results. Join the community, sweat it out, and achieve your fitness goals like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

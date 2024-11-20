import React, { useState } from 'react';
import './Guide.css'; // Make sure to import the external CSS file

const exercises = [
  {
    name: 'Push-Ups',
    description: 'A classic exercise for building upper body strength.',
    benefits: [
      'Strengthens chest, shoulders, and triceps',
      'Improves core stability',
      'Increases functional upper body strength',
    ],
    steps: [
      'Start in a plank position with your hands shoulder-width apart.',
      'Lower your body until your chest nearly touches the floor.',
      'Push yourself back up to the starting position.',
      'Repeat for the desired number of reps.',
    ],
  },
  {
    name: 'Squats',
    description: 'A foundational movement for lower body strength.',
    benefits: [
      'Builds strength in legs and glutes',
      'Improves balance and stability',
      'Enhances core strength and posture',
    ],
    steps: [
      'Stand with feet shoulder-width apart.',
      'Lower your hips back and down as if sitting into a chair.',
      'Keep your chest lifted and knees over your toes.',
      'Return to the standing position and repeat.',
    ],
  },
  {
    name: 'Plank',
    description: 'A core exercise that enhances stability and endurance.',
    benefits: [
      'Strengthens the core muscles',
      'Improves posture and balance',
      'Helps prevent back pain',
    ],
    steps: [
      'Start in a plank position on your forearms and toes.',
      'Keep your body in a straight line from head to heels.',
      'Hold the position for the desired amount of time.',
      'Breathe steadily and keep your core engaged.',
    ],
  },
  {
    name: 'Lunges',
    description: 'A great exercise for improving lower body balance and strength.',
    benefits: [
      'Strengthens legs and glutes',
      'Improves balance and coordination',
      'Increases hip flexibility',
    ],
    steps: [
      'Stand tall with feet hip-width apart.',
      'Step forward with one leg and lower your hips until both knees are bent at 90 degrees.',
      'Push back to the starting position and repeat with the other leg.',
    ],
  },
];

const Guide = () => {
  const [currentExercise, setCurrentExercise] = useState(exercises[0]);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < currentExercise.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectExercise = (exercise) => {
    setCurrentExercise(exercise);
    setCurrentStep(0);
  };

  return (
    <div className="guide-container">
      <h1 className="guide-title">Exercise Guide</h1>

      {/* Exercise Selection */}
      <div className="exercise-selection">
        <h2>Choose an Exercise:</h2>
        {exercises.map((exercise) => (
          <button
            key={exercise.name}
            onClick={() => selectExercise(exercise)}
            className={`exercise-button ${currentExercise.name === exercise.name ? 'selected' : ''}`}
          >
            {exercise.name}
          </button>
        ))}
      </div>

      {/* Exercise Details */}
      <div className="exercise-details">
        <h2>{currentExercise.name}</h2>
        <p><strong>Description:</strong> {currentExercise.description}</p>
        <p><strong>Benefits:</strong></p>
        <ul>
          {currentExercise.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Step-by-Step Guide */}
      <div className="step-guide">
        <h3>Step {currentStep + 1} of {currentExercise.steps.length}</h3>
        <p>{currentExercise.steps[currentStep]}</p>

        {/* Step Navigation */}
        <div className="navigation-buttons">
          <button onClick={previousStep} disabled={currentStep === 0} className="nav-button">
            Previous
          </button>
          <button onClick={nextStep} disabled={currentStep === currentExercise.steps.length - 1} className="nav-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;

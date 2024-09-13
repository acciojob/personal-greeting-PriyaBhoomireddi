import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Initialize the state to manage the user's name
  const [name, setName] = useState("");

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Input field for the user to enter their name */}
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleChange} 
      />
      
      {/* Display the personalized greeting */}
      <p>{name ? `Hello, ${name}!` : "Please enter your name."}</p>
    </div>
  );
};

export default App;

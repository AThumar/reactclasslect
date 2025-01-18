import * as React from "react";

function fetchuserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "AT", id: 2, hobbies: ["Coding", "Reading", "Gaming"] });
    }, 1000);
  });
}

function Apisimulator() {
  const [name, setName] = React.useState("wait...");
  const [id, setId] = React.useState("wait...");
  const [hobbies, setHobbies] = React.useState([]);
  const [countdown, setCountdown] = React.useState(10); // Countdown starts at 10
  const [timer, setTimer] = React.useState(0); // Timer starts at 0

  // Fetch user data on component mount
  React.useEffect(() => {
    fetchuserData().then((data) => {
      setName(data.name);
      setId(data.id);
      setHobbies(data.hobbies);
    });
  }, []);

  // Countdown timer
  React.useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup on unmount
  }, []);

  // Incrementing timer
  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>API Simulator</h1>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h3>Countdown: {countdown}</h3>
      <h3>Timer: {timer}</h3>
    </div>
  );
}

export default Apisimulator;

// implement counterdown/plus timer
// pass array of strings as argument
//convert array to unordered list

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

  // Fetch user data on component mount
  React.useEffect(() => {
    fetchuserData().then((data) => {
      setName(data.name);
      setId(data.id);
      setHobbies(data.hobbies);
    });
  }, []);

  // Countdown timer

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
    </div>
  );
}

export default Apisimulator;

// implement counterdown/plus timer
// pass array of strings as argument
//convert array to unordered list
//list of 4 img : change images at 4 sec interval

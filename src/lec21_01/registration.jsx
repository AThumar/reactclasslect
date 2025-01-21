import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    matchTypes: [],
    state: "",
    dob: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});

  const states = [
    "Gujrat",
    "Andhra Pradesh",
    "Karnataka",
    "Maharashtra",
    "Tamil Nadu",
    "Uttar Pradesh",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const matchTypes = checked
          ? [...prevState.matchTypes, value]
          : prevState.matchTypes.filter((match) => match !== value);
        return { ...prevState, matchTypes };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 10)
      newErrors.name = "Name must be at least 10 characters long.";
    if (!/^[\w-.]+@[\w-]+\.[a-z]{2,7}$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (formData.matchTypes.length === 0)
      newErrors.matchTypes = "Please select at least one match type.";
    if (!formData.state) newErrors.state = "Please select a state.";
    if (!formData.dob) newErrors.dob = "Please enter your date of birth.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData([...submittedData, formData]);
      setFormData({
        name: "",
        gender: "",
        email: "",
        matchTypes: [],
        state: "",
        dob: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Types of Match:</label>
          <input
            type="checkbox"
            name="matchTypes"
            value="ODI"
            checked={formData.matchTypes.includes("ODI")}
            onChange={handleChange}
          />{" "}
          ODI
          <input
            type="checkbox"
            name="matchTypes"
            value="TEST"
            checked={formData.matchTypes.includes("TEST")}
            onChange={handleChange}
          />{" "}
          TEST
          <input
            type="checkbox"
            name="matchTypes"
            value="T20"
            checked={formData.matchTypes.includes("T20")}
            onChange={handleChange}
          />{" "}
          T20
          <input
            type="checkbox"
            name="matchTypes"
            value="DOMESTIC"
            checked={formData.matchTypes.includes("DOMESTIC")}
            onChange={handleChange}
          />{" "}
          DOMESTIC
          {errors.matchTypes && (
            <p style={{ color: "red" }}>{errors.matchTypes}</p>
          )}
        </div>

        <div>
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      {submittedData.length > 0 && (
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>
              <p>Name: {data.name}</p>
              <p>Gender: {data.gender}</p>
              <p>Email: {data.email}</p>
              <p>Match Types: {data.matchTypes.join(", ")}</p>
              <p>State: {data.state}</p>
              <p>Date of Birth: {data.dob}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegistrationForm;

import './App.css';
import React from "react"

function App() {

  const [formData, setFormData] = React.useState({
    email: "",
    password1: "",
    password2: "",
    marketing: false,
  })

  console.log(formData)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevData => {
      return (
        {
        ...prevData, [name]: type === "checkbox" ? checked : value
        }
      )
    })
  }


  function handleData(event) {
    event.preventDefault()
    const passMessage = "info submitted"
    const failMessage = "passwords do not match"
    formData.password1 === formData.password2 ? 
      console.log(passMessage) : console.log(failMessage)
    formData.marketing && console.log("Thanks for signing up for the newsletter")
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleData}>
        <input
          className="form--input"
          type="text"
          placeholder="email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="password"
          placeholder="password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="password"
          placeholder="confirm password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
        />
        <div className="form--marketing">
            <input
                id="okayToEmail"
                type="checkbox"
                name="marketing"
                checked={formData.checkbox}
                onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">submit</button>
      </form>
    </div>
  );
}

export default App;

import React from "react"

export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    isJoin: true,
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    formData.password === formData.confirmPassword
      ? console.log("Successfully signed up") ||
        (formData.isJoin &&
          console.log("Thanks for signing up for our newsletter!"))
      : console.log("passwords do not match")
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            name="isJoin"
            checked={formData.isJoin}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  )
}

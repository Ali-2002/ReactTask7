import { React, useState } from "react";
import "./Form.css"
const Form = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comments: "",
    isActive: false,
  });
  const validate = () => {
    if (
      state.firstname &&
      state.lastname &&
      state.email &&
      state.phone &&
      state.comments
    ) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    validate()
      ? setState({ ...state, [e.target.name]: e.target.value, isActive: true })
      : setState({
          ...state,
          [e.target.name]: e.target.value,
          isActive: false,
        });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Proses uğurla yerinə yetirildi");
    console.log("Adı: " + state.firstname);
    console.log("Soyadı: " + state.lastname);
    console.log("Email ünvanı: " + state.email);
    console.log("Telefon nömrəsi: " + state.phone);
    console.log("Şərh: " + state.comments);
  };

  return (
    <>
      <main>
        <form className="user-form" onSubmit={handleSubmit}>
          <label htmlFor="firstname">
            Ad:
            <input
              name="firstname"
              type="text"
              onChange={handleChange}
              value={state.firstname}
            />
          </label>

          <label htmlFor="lastname">
            Soyad:
            <input
              name="lastname"
              type="text"
              onChange={handleChange}
              value={state.lastname}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={state.email}
            />
          </label>

          <label htmlFor="phone">
            Telefon nömrəsi:
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={state.phone}
            />
          </label>

          <label htmlFor="comments">
            Şərh
            <br />
            <textarea
              name="comments"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={state.comments}
            ></textarea>
          </label>

          <button type="submit" className="submit" disabled={!state.isActive}>
            Göndər
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;

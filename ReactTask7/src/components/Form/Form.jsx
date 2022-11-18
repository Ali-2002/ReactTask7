import { useEffect } from "react";
import { React, useState } from "react";
import "./Form.css";
const Form = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comments: "",
    isActive: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    alert("Proses uğurla yerinə yetirildi");
    console.log("Adı: " + state.firstname);
    console.log("Soyadı: " + state.lastname);
    console.log("Email ünvanı: " + state.email);
    console.log("Telefon nömrəsi: " + state.phone);
    console.log("Şərh: " + state.comments);
   
  };

  useEffect(()=> {
    if (
        state.firstname !== "" &&
        state.lastname !== "" &&
        state.email !== "" &&
        state.phone !== "" &&
        state.comments !== ""
      ) {
        setState({...state, isActive: true });
  
      } else {
        setState({...state, isActive: false });
      }
  },[state])

  return (
    <>
      <main> 
        <form className="user-form" onSubmit={handleSubmit}>
          <label htmlFor="firstname">
            Ad:
            <input
              className="full-name"
              name="firstname"
              type="text"
              onChange={handleChange}
              value={state.firstname}
              required
            />
          </label>

          <label htmlFor="lastname">
            Soyad:
            <input
              className="full-name"
              name="lastname"
              type="text"
              onChange={handleChange}
              value={state.lastname}
              required
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

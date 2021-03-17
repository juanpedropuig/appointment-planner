import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleName = ({ target }) => {
    setName(target.value);
  }
  const handlePhone = ({ target }) => {
    setPhone(target.value);
  }
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input
          type="text"
          value={name}
          onChange={handleName}
          required
      />
      Telephone number:
      <input
          type="tel"
          value={phone}
          onChange={handlePhone}
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />
      E-mail address:
      <input
          type="email"
          value={email}
          onChange={handleEmail}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

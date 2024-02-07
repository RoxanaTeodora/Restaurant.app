import React, { useState } from "react";

//declarea useState la inceoutul componentei

const Form = () => {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@sculpture.com",
  });

  return (
    <div className="form">
      <form>
        <label>
          First name:
          <input
            value={form.firstName}
            onChange={(e) => {
              setForm({
                ...form,
                firstName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Last name:
          <input
            value={form.lastName}
            onChange={(e) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Email:
          <input
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </label>
        <p>
          {form.firstName} {form.lastName} ({form.email})
        </p>
        <button onClick={() => console.log("hello")}>Reset</button>
      </form>
    </div>
  );
};

export default Form;

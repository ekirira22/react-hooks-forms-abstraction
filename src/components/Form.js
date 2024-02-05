import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName : "John",
    lastName : "Henry",
    admin : false
  })

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if(e.target.type === "checkbox"){
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [name] : value
    });
  }

  console.log(formData)
  return (
    <form>
      <input type="text" onChange={handleChange} name="firstName" value={formData.firstName} />
      <input type="text" onChange={handleChange} name="lastName" value={formData.lastName} />
      <input type="checkbox" onChange={handleChange} name="admin" checked={formData.admin} />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

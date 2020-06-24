import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const AddList = props => {
  const [formData, setFormData] = useState({
    description: "",
    avatar: ""
  })

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const { description, avatar } = formData

  const handleSubmit = async e => {
    e.preventDefault()
    const url = `/lists/create`
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const createList = await fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(avatar === "" ? {description} : formData)
    })

    if (createList) {
      props.history.push('/')
    }
  }
  return (
    <div>
      <Header text="Add Task" />
      <FormComponent onSubmit={handleSubmit}>
        <input type="text" className="description" name="description" placeholder="Task Description" id="description" onChange={handleInputChange} />
        <input type="text" className="avatar" name="avatar" placeholder="Avatar URL" id="avatar" onChange={handleInputChange} />
        <button>Add</button>
      </FormComponent>
    </div>
  )
}

const FormComponent = styled.form`
margin: 60px 5px 20px 15px;
input {
  display: block;
  width: 95%;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #674aed;
  margin-bottom: 60px;
  padding-bottom: 20px;
}

.description {
  padding-bottom: 40px;
}

button {
  background: #674aed;
  color: white;
  padding: 5px 40px 5px 40px;
  border-radius: 5px;
  margin-left: 120px;
}
`

export default AddList;
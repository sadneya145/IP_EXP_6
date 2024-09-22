import React, { useState } from 'react';
import './style.css'

const saveToBackend = async (data) => {
  try {
    const response = await fetch('http://localhost:5000/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to save data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    course: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await saveToBackend(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      course: ''
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="enroll">
      <h1>Enroll in Course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default Enroll;

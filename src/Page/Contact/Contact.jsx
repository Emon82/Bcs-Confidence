import React, { useState } from 'react';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/NavBar/NavBar';
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Make an HTTP POST request to your server here with the form data
    // using Fetch API or a library like Axios

    // Display a success message or an error message to the user
  }
  return (
    <div className="">
    <NavBar/>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card" style={{height:"540px",display:"flex",justifyContent:"center",alignItems:"center",padding:"25px",backgroundColor:"darkseagreen",fontSize:"1.2rem",margin:"20px"}}>
          <p>
          আমাদের সাথে যোগাযোগ করার জন্য ফর্মটি পূরণ করুন অথবা নিচে দেওয়া আমাদের নম্বরে যোগাযোগ করুন অথবা আমাদের ঠিকানায় এসে যোগাযোগ করুন।
          </p>
        </div>
      </div>
      <div className="col-md-6">
      <div className='contact-form'>
        <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
      </div>
      </div>
    
    </div>
    <Footer/>
    </div>
  )
}

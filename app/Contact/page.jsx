'use client'
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';


export default function ContactPage() {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate fields on input change
    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? '' : 'Invalid email format',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value ? '' : `The ${name} field is required`,
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return (
      inputValues.name &&
      validateEmail(inputValues.email) &&
      inputValues.message &&
      !Object.values(errors).some((error) => error)
    );
  };

  const sendEnquiry = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setSubmitError("Please fill in all fields correctly.");
      return;
    }

    try {
      const response = await axios.get('/api/send-contact', {
        params: {
          name: inputValues.name,
          email: inputValues.email,
          text: inputValues.message,
        },
      });
      alert('Message sent successfully!');
      setSubmitError("");
      setInputValues({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div>
      <Navbar />
      {/* Banner Section */}
      <div className="relative top-[50px] lg:h-[60vh] h-[40vh] w-full">
        <div className="absolute inset-0  bg-gradient-to-r from-[#81df83] via-[#27ab4c] to-[#0e9014] flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-md w-[300px] lg:w-auto">
            Get In Touch With Us
          </h1>
        </div>
      </div>


      {/* Contact Form & Information Section */}
      <div className="container mx-auto px-6 py-12 md:px-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Send Us A Message
            </h2>
            <form onSubmit={sendEnquiry} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={inputValues.name}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={inputValues.email}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={inputValues.message}
                  onChange={handleChange}
                  className="mt-2 p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Write your message here..."
                />
                {errors.message && <p className="text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={!isFormValid()}
                className="bg-[#5062a8] text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition-colors duration-300 w-full disabled:opacity-50"
              >
                Send Message
              </button>
              {submitError && (
                <p className="mt-2 text-red-500 text-center">{submitError}</p>
              )}
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="flex flex-col justify-center space-y-8 text-gray-800">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Address
              </h2>
              <p className="text-black text-xl">
                Smilez Ayurvedic Wellness Centre<br />
                New Lane Road, Near Asset Periyar Scape<br />
                Thottakkattukara, Aluva,
                Kerala 683108
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://www.facebook.com/profile.php?id=61558441632426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/smilezawc?igsh=cW8xODk2azI2bDR4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-500 transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-lg">
                Email: smilezwellnesscentre@gmail.com.com
                <br />
                Phone: +91 8113930952
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

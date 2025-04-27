import React,{ useState } from "react";
import emailjs from "@emailjs/browser";
import Spline from '@splinetool/react-spline';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2qya65r", // Replace with your EmailJS Service ID
        "template_bownagl", // Replace with your EmailJS Template ID
        formData,
        "jl2htpjrYZPseQYWa" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 md:ml-64 relative">
        <Spline scene="https://prod.spline.design/KZOEhjORg8nhU-YI/scene.splinecode" className="absolute "/>
  <div className="bg-white shadow-lg p-10 rounded-lg max-w-6xl w-full flex flex-col lg:flex-row relative">
    {/* Left Side - Contact Details */}
    <div className="w-full lg:w-1/3 lg:pr-8 border-b lg:border-r border-gray-300 mb-8 lg:mb-0">
      <h2 className=" font-serif mb-6 text-xl sm:text-base md:text-lg ">
        CONTACT ME VIA THE FORM BELOW & WE'LL GET BACK TO YOU AS SOON AS WE CAN.
      </h2>
      <div className="mb-4">
        <p className="text-gray-500 uppercase text-xs">Email</p>
        <p className="text-gray-800">marigeorgivoic@gmail.com</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 uppercase text-xs">Linkedin</p>
        <p className="text-gray-800">
          <a
            href="https://www.linkedin.com/in/maria-voicu-951b68300/"
            className="text-gray-800 uppercase text-xs"
          >
            Voicu Maria
          </a>
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 uppercase text-xs">Address</p>
        <p className="text-gray-800">București,România</p>
      </div>
      <div className="flex space-x-4 mt-4">
        {/* Social Icons */}
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-2/3 lg:pl-8"
    >
      <input
        type="text"
        name="name"
        placeholder="NAME"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600"
      />

      <input
        type="text"
        name="phone"
        placeholder="PHONE"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600"
      />

      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600"
      />

      <textarea
        name="message"
        placeholder="MESSAGE"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600"
      ></textarea>

      <button
        type="submit"
        className="w-full p-3 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-lg transition"
      >
        SUBMIT
      </button>

      {status && <p className="text-center text-gray-700 mt-3">{status}</p>}
    </form>
  </div>
</div>





  );
};

export default ContactForm;
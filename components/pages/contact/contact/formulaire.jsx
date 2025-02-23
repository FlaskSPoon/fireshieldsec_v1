import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center min-h-screen bg-cover bg-center px-6 py-12 relative" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business,office')" }}>
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      
      {/* Formulaire */}
      <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg lg:ml-12">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">NOUS CONTACTER</h2>
        <p className="text-center text-gray-500 mb-6">PAR MAIL</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="NOM COMPLET" value={formData.fullName} onChange={handleChange} required
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          
          <input type="email" name="email" placeholder="ADRESSE EMAIL" value={formData.email} onChange={handleChange} required
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          
          <input type="text" name="subject" placeholder="OBJET" value={formData.subject} onChange={handleChange} required
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          
          <textarea name="message" placeholder="Message ..." value={formData.message} onChange={handleChange} required
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 h-24"></textarea>
          
          <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Envoyer</button>
        </form>
      </div>
      
      {/* Informations de contact */}
      <div className="relative text-white max-w-lg mt-12 lg:mt-0">
        <h2 className="text-3xl font-bold">Voulez-vous devenir</h2>
        <h2 className="text-3xl font-bold mb-4">Partenaire ou avoir un Talent ?</h2>
        <p className="text-gray-300 mb-6">Pour plus d’informations sur Gainde Talent Provider, merci de nous contacter :</p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-lg"><FaPhoneAlt className="text-white text-xl" /></div>
            <span className="text-lg">33 858 49 75</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-lg"><FaEnvelope className="text-white text-xl" /></div>
            <span className="text-lg">contact@gaindetalent.com</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-lg"><FaMapMarkerAlt className="text-white text-xl" /></div>
            <span className="text-lg">12, Rue Fila, Fann Hock, BP 6856 Dakar, Sénégal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

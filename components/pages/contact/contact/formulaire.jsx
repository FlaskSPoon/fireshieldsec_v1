import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
    <div 
      className="d-flex flex-row align-items-center justify-content-center min-vh-100 p-3" 
      style={{ 
        backgroundImage: "url('/assets/img/partenaire/cont.png')", 
         backgroundSize: "cover", 
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      <div 
    className="position-absolute top-0 start-0 w-100 h-100" 
    style={{ backgroundColor: "rgba(138, 43, 226, 0.2)", zIndex: 1 , pointerEvents: "none"}}
  >
    </div>

      
      {/* Infos de contact */}
      <motion.div 
   className="mt-4 p-4 text-right  text-light rounded-4 w-100" 
   style={{ maxWidth: "600px", opacity: 0.9 }}
   initial={{ opacity: 0, y: 50 }} 
   animate={{ opacity: 1, y: 0 }} 
   transition={{ duration: 0.5 }}
 >
 <motion.h4 
  className="fw-bold" 
  style={{ color: "#4B0082" }}
  initial={{ x: -100, opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }} 
  transition={{ duration: 1 }}
>
  Vous voulez accéder à nos services ou devenir partenaire ?
</motion.h4>

<motion.h4 
  className="fw-bold" 
  style={{ color: "#4B0082" }}
  initial={{ x: -100, opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }} 
  transition={{ duration: 1, delay: 0.3 }}
>
  Contactez-nous :
</motion.h4>

   <div className="d-flex align-items-center justify-content-center mb-2">
     <FaPhone className="me-2" size={25} color="#800020" />
     <span>(221) 33 801 57 16</span>
   </div>
   <div className="d-flex align-items-right justify-content-center mb-2">
     <FaPhone className="me-2" size={25} color="#800020"/>
     <span> (221) 77 928 66 82</span>
   </div>
   <div className="d-flex align-items-right justify-content-center mb-2">
     <FaEnvelope className="me-2" size={25} color="#800020"  />
     <span>contact@Fireshieldsec.com</span>
   </div>
   <div className="d-flex align-items-right justify-content-center">
     <FaMapMarkerAlt className="me-2" size={25} color="#800020" />
     <span>Mermoz pyrotechnique ,villa 22, Dakar-senegal</span>
   </div>
 </motion.div>

      {/* Formulaire de contact */}
      <motion.div 
        className="shadow-lg rounded-4 p-5 bg-white w-50 ms-4" 
        style={{ maxWidth: "600px", opacity: 0.9 ,zIndex: 2}}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-center text-dark fw-bold">NOUS CONTACTER</h3>
        <p className="text-center text-secondary">PAR MAIL</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="fullName" placeholder="Nom Complet" value={formData.fullName} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <input type="email" name="email" placeholder="Adresse Email" value={formData.email} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <input type="text" name="subject" placeholder="Objet" value={formData.subject} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <textarea name="message" placeholder="Message ..." value={formData.message} onChange={handleChange} required className="form-control" rows="4"></textarea>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gt-btn  w-100 fw-bold">
            Envoyer
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NosServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [handPosition, setHandPosition] = useState({ x: 0, y: 0, rotate: 0 }); // Position et rotation de l'icône de main

  const services = [
    { icon: "/assets/img/icon/aboutIcon1_1.png", title: "Stratégie de Sécurité", description: "Développement de stratégie de sécurité.\nAudit et conformité." },
    { icon: "/assets/img/icon/aboutIcon3_1.png", title: "Cybersécurité Offensive", description: "Tests d’intrusion et audits de vulnérabilité." },
    { icon: "/assets/img/icon/aboutIcon1_1.png", title: "Surveillance et Réponse", description: "Détection des menaces.\nRéponse aux incidents.\nGestion des risques." },
    { icon: "/assets/img/icon/aboutIcon1_2.png", title: "Formations", description: "Programmes de formation et simulations d’attaques." },
    { icon: "/assets/img/icon/aboutIcon1_1.png", title: "Infogérance", description: "Gestion et supervision des infrastructures IT." },
  ];

  const backgroundColors = [
    "#FF5733", // Stratégie de Sécurité
    "#33FF57", // Cybersécurité Offensive
    "#FFAA33", // Surveillance et Réponse
    "#FF33A6", // Formations
    "#FF8C33", // Infogérance
  ];

  const radius = 280; // Rayon du cercle des icônes

  // Fonction pour calculer la position et la rotation de l'icône de main
  const calculateHandPosition = (index) => {
    const angle = (index / services.length) * (2 * Math.PI); // Angle en radians
    const x = Math.cos(angle) * radius; // Position X
    const y = Math.sin(angle) * radius; // Position Y
    const rotate = (angle * 180) / Math.PI - 90; // Rotation en degrés (ajustement pour pointer vers l'icône)
    setHandPosition({ x, y, rotate });
  };

  // Effet pour déplacer l'icône de main lorsque hoveredIndex change
  useEffect(() => {
    if (hoveredIndex !== null) {
      calculateHandPosition(hoveredIndex);
    }
  }, [hoveredIndex]);

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-dark position-relative p-3">
      {/* Cercle autour des icônes */}
      <div
        className="position-absolute"
        style={{
          width: "615px",
          height: "615px",
          border: "0.5px solid #6c757d",
          borderRadius: "50%",
          zIndex: 1, // z-index inférieur à celui des icônes
        }}
      ></div>

      {/* Conteneur des icônes */}
      <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: "460px", height: "460px" }}>
        {services.map((service, index) => {
          const angle = (index / services.length) * (2 * Math.PI);
          const x = Math.cos(angle) * radius; // Position X des icônes sur le cercle
          const y = Math.sin(angle) * radius; // Position Y des icônes sur le cercle

          return (
            <div
              key={index}
              className={`position-absolute d-flex align-items-center justify-content-center transition-all duration-300 hover:scale-110 
                ${hoveredIndex === index ? "bg-danger rounded-circle text-white" : "text-dark"}`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                width: "100px", // Taille de l'icône
                height: "100px",
                zIndex: 2, // z-index supérieur à celui du cercle
              }}
              onMouseEnter={() => setHoveredIndex(index)} // On survole l'icône et on la rend active
            >
              <Image src={service.icon} alt="Service Icon" width={100} height={100} />
            </div>
          );
        })}

        {/* Texte au centre */}
        <div
          className="position-absolute text-center z-10 p-4 w-75 min-h-100 d-flex flex-column gap-2 justify-content-center shadow-lg rounded-full transition-opacity duration-300"
          style={{ zIndex: 3 }} // z-index supérieur à celui des icônes et du cercle
        >
          {hoveredIndex !== null ? (
            <>
              <h3 className="fs-5 fw-bold">{services[hoveredIndex].title}</h3>
              <p className="fs-6 mt-2" style={{ backgroundColor: backgroundColors[hoveredIndex], padding: "10px", borderRadius: "8px" }}>
                {services[hoveredIndex].description}
              </p>
            </>
          ) : (
            <>
              <p className="fs-5 fw-semibold text-danger p-2 rounded">NOS SERVICES</p>
              {/* Ajouter l'icône de main avec animation */}
              <div
                className="hand-icon position-absolute"
                style={{
                  transform: `translate(${handPosition.x}px, ${handPosition.y}px) rotate(${handPosition.rotate}deg)`,
                  transition: "transform 0.5s ease-in-out", // Animation fluide
                }}
              >
                <i className="fas fa-hand-point-right"></i>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
      <div className="googpemap">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3858.581451483841!2d-17.4720733!3d14.7362398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10da8cac77bcd%3A0x8393f2ac8cdc8913!2sFireshield%20Security!5e0!3m2!1sfr!2ssn!4v1741356614055!5m2!1sfr!2ssn"
    width="600"
    height="450"
    style={{ border: "0" }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </div>
  );
}

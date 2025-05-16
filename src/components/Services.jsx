import React from 'react';
import { FaHiking, FaLandmark, FaMapMarkedAlt, FaShuttleVan } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaHiking />,
    title: 'Guided Trekking Adventures',
    desc: 'Explore the Himalayas with expert guides who know every trail.'
  },
  {
    icon: <FaLandmark />,
    title: 'Cultural Tours',
    desc: 'Experience authentic Nepalese traditions and heritage.'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Customized Itineraries',
    desc: 'Tailor-made trips designed just for you.'
  },
  {
    icon: <FaShuttleVan />,
    title: 'Airport Pickup & Support',
    desc: 'Seamless travel from arrival to departure.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

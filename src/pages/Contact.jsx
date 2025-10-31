import React from "react";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import '../css/animate.css';
import '../icon/icomoon/style.css';
import Slider from "../components/Slider";
import ContactSection from "../components/ContactSection";
import ContactSectionstyle from "../components/ContactSectionstyel";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
    <Slider/>
    <ContactSection />
    <ContactSectionstyle />
    <ContactSection />
    <ContactForm />
     </>

  );
};

export default Contact;

import React from "react";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import '../css/animate.css';
import '../icon/icomoon/style.css';
import ContactSection from "../components/ContactSection";
import ContactSectionArti from "../components/ContactSectionArti";
import ContactSectionstyle from "../components/ContactSectionstyel";
import ContactForm from "../components/ContactForm";
import PageTitleImage from "../components/PageTitleImage";

const Contact = () => {
  return (
    <>
     <PageTitleImage
  title="CONTACT US"
  subtitle="WE'RE HERE TO HELP YOU SHINE"
  image="images/Gold-jwellery/slider-23.jpg"
/>

    <ContactSection />
     <ContactSectionArti />
    <ContactSectionstyle />
   
    <ContactForm />
     </>

  );
};

export default Contact;

import React, { useState } from "react";

const ContactForm = () => {
  // Optional: State to store form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    review: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", phone: "", email: "", review: "" });
  };

  return (
    <section className="s-contact-form flat-spacing">
      <div className="container">
        {/* Title */}
        <div className="sect-title text-center">
          <p className="h1 title mb-8">Contact Form</p>
          <p className="s-subtitle h6">
            Contact us using the form below, we will contact you as soon as possible
          </p>
        </div>

        {/* Form */}
        <form className="form-contact-2" onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="tf-grid-layout md-col-3">
              <fieldset>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  type="number"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </fieldset>
            </div>

            <textarea
              name="review"
              placeholder="Review"
              value={formData.review}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-action">
            <button type="submit" className="h6 tf-btn animate-btn">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

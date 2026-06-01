import { useState } from "react";
import branches from "../data/branches.js";

const serviceOptions = [
  "Hair Care",
  "Skin Care",
  "Body Care",
  "Nail Care",
  "Men’s Grooming",
  "Product Enquiry",
];

const initialForm = {
  fullName: "",
  phone: "",
  branch: "",
  service: "",
  preferredDate: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};
    const phonePattern = /^[0-9+\-\s()]{7,15}$/;

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!phonePattern.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.branch) {
      nextErrors.branch = "Please select a branch.";
    }

    if (!formData.service) {
      nextErrors.service = "Please select a service.";
    }

    if (!formData.preferredDate) {
      nextErrors.preferredDate = "Please choose a preferred date.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-info">
          <div className="section-heading">
            <p>Contact</p>
            <h2>Book Your Naturals Experience</h2>
          </div>
          <p>
            Share your preferred branch, service, and visit date. Our team will
            help you choose the right appointment slot and salon expert.
          </p>
          <div className="contact-actions">
            <a href="https://wa.me/910000000000" aria-label="WhatsApp Naturals">
              WhatsApp
            </a>
            <a href="tel:+910000000000" aria-label="Call Naturals">
              Call
            </a>
            <a href="https://www.instagram.com/" aria-label="Open Instagram">
              Instagram
            </a>
            <a href="https://maps.google.com/" aria-label="Open Google Maps">
              Google Maps
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              onChange={handleChange}
              type="text"
              value={formData.fullName}
            />
            {errors.fullName && <span>{errors.fullName}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              onChange={handleChange}
              type="tel"
              value={formData.phone}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="branch">Select Branch</label>
            <select
              id="branch"
              name="branch"
              onChange={handleChange}
              value={formData.branch}
            >
              <option value="">Choose branch</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
            {errors.branch && <span>{errors.branch}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="service">Select Service</label>
            <select
              id="service"
              name="service"
              onChange={handleChange}
              value={formData.service}
            >
              <option value="">Choose service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && <span>{errors.service}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="preferredDate">Preferred Date</label>
            <input
              id="preferredDate"
              name="preferredDate"
              onChange={handleChange}
              type="date"
              value={formData.preferredDate}
            />
            {errors.preferredDate && <span>{errors.preferredDate}</span>}
          </div>

          <div className="form-field full-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              rows="5"
              value={formData.message}
            />
          </div>

          <button className="submit-button" type="submit">
            Submit Enquiry
          </button>

          {submitted && (
            <p className="success-message">
              Thank you! Our team will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

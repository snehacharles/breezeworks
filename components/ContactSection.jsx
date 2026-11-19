
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setSubmitted(false);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            Let's talk about
            <br />
            <span>your comfort.</span>
          </h2>
          <p>
            Have a question or need help with your AC?
            Send us a message and tell us how we can help.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <p className="eyebrow">CONTACT INFORMATION</p>
            <h3>We're here to help.</h3>
            <p className="contact-info-description">
              Whether you need a repair, installation or
              regular maintenance, we're happy to hear
              about your requirements.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>Business contact details to be added</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>Business email to be added</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Business location to be added</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <span>01</span>
              <p>
                Every good service experience begins
                with a conversation.
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-heading">
                  <span>LET'S CONNECT</span>
                  <h3>Send us a message</h3>
                </div>

                <label>
                  Your Name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Subject *
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a subject</option>
                    <option>AC Repair Enquiry</option>
                    <option>AC Servicing Enquiry</option>
                    <option>Installation Enquiry</option>
                    <option>Maintenance Enquiry</option>
                    <option>Commercial AC Enquiry</option>
                    <option>General Enquiry</option>
                  </select>
                </label>

                <label>
                  Your Message *
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send Message
                  <ArrowUpRight size={19} />
                </button>

                <p className="contact-disclaimer">
                  Demo contact form. Your message will not
                  be sent to a real business.
                </p>
              </form>
            ) : (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckCircle2 size={38} />
                </div>

                <p className="eyebrow">MESSAGE PREVIEW</p>
                <h3>Thank you, {form.name}!</h3>
                <p>
                  Your demo enquiry has been submitted successfully.
                </p>

                <div className="contact-message-summary">
                  <div>
                    <span>Email</span>
                    <strong>{form.email}</strong>
                  </div>
                  <div>
                    <span>Subject</span>
                    <strong>{form.subject}</strong>
                  </div>
                  <div>
                    <span>Message</span>
                    <strong>{form.message}</strong>
                  </div>
                </div>

                <p className="contact-disclaimer">
                  Demo only — no actual message has been sent.
                </p>

                <button
                  type="button"
                  className="contact-submit"
                  onClick={handleReset}
                >
                  Send Another Message
                  <ArrowUpRight size={19} />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

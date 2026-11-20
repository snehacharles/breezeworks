
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    acType: "",
    date: "",
    address: "",
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
      phone: "",
      service: "",
      acType: "",
      date: "",
      address: "",
      message: "",
    });
    setSubmitted(false);
  }

  return (
    <section className="booking-page" id="booking">
      <div className="booking-hero">
        <p className="eyebrow">BOOK A SERVICE</p>
        <h2>
          Let's bring back
          <br />
          <span>your comfort.</span>
        </h2>
        <p>
          Tell us what you need. Share a few details
          and submit your service request.
        </p>
      </div>

      <div className="booking-content">
        <div className="booking-info">
          <p className="eyebrow">SERVICE REQUEST</p>
          <h2>Good comfort starts with the right care.</h2>
          <p>
            Help us understand your cooling requirements
            by sharing a few details about your AC.
          </p>

          <div className="booking-note">
            <ClipboardList size={25} />
            <div>
              <h3>Simple booking process</h3>
              <p>
                Complete the form and review your request
                in a confirmation summary.
              </p>
            </div>
          </div>
        </div>

        {!submitted ? (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form-heading">
              <span>01 / YOUR DETAILS</span>
              <h2>Request a service</h2>
            </div>

            <div className="booking-fields">
              <label>
                Full Name *
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  pattern="[0-9+\s\(\)\-]{7,18}"
                  required
                />
              </label>

              <label>
                Service Required *
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option>AC Repair</option>
                  <option>AC Servicing</option>
                  <option>AC Installation</option>
                  <option>Gas Refilling</option>
                  <option>AC Maintenance</option>
                  <option>AC Uninstallation</option>
                  <option>Commercial AC Services</option>
                </select>
              </label>

              <label>
                AC Type
                <select
                  name="acType"
                  value={form.acType}
                  onChange={handleChange}
                >
                  <option value="">Select AC type</option>
                  <option>Split AC</option>
                  <option>Window AC</option>
                  <option>Central AC</option>
                  <option>Other / Not sure</option>
                </select>
              </label>

              <label>
                Preferred Date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </label>

              <label>
                Address / Location *
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  required
                />
              </label>

              <label className="booking-full">
                Additional Message
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your AC issue..."
                />
              </label>
            </div>

            <button type="submit" className="booking-submit">
              Submit Request
              <ArrowUpRight size={19} />
            </button>

            <p className="booking-disclaimer">
              Demo booking form. No actual service request will be sent.
            </p>
          </form>
        ) : (
          <div className="booking-success">
            <div className="booking-success-icon">
              <CheckCircle2 size={38} />
            </div>

            <p className="eyebrow">REQUEST PREVIEW</p>
            <h2>Thank you, {form.name}!</h2>
            <p className="booking-success-text">
              Your demo service request has been submitted successfully.
            </p>

            <div className="booking-summary">
              <h3>Booking Summary</h3>
              {Object.entries({
                Name: form.name,
                Phone: form.phone,
                Service: form.service,
                "AC Type": form.acType || "Not specified",
                Date: form.date || "Not specified",
                Location: form.address,
                Message: form.message || "None",
              }).map(([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <p className="booking-disclaimer">
              Demo only — this request has not been sent to a real provider.
            </p>

            <button
              type="button"
              className="booking-submit"
              onClick={handleReset}
            >
              Make Another Request
              <ArrowUpRight size={19} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

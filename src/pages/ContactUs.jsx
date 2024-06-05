import React from 'react';

const ContactUs = () => {
  return (
    <div className="px-4 py-8 lg:px-0">
      <section className="mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have questions, suggestions, or feedback? We would love to hear from you! Feel free to reach out to us using the contact information below or fill out the form to send us a message.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg mb-4">123 BookWiz Street</p>
            <p className="text-lg mb-4">City, State, Zip Code</p>
            <p className="text-lg mb-4">Country</p>
            <p className="text-lg">Phone: +123 456 7890</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Opening Hours</h2>
          <p className="text-lg mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-lg">Saturday - Sunday: Closed</p>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          {/* Add contact form here */}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

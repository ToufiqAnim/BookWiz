import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-4 py-8 lg:px-0">
      <section className="mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Welcome to BookWiz</h2>
          <p className="text-lg">
            BookWiz is your ultimate destination for managing and exploring your book collection. Whether you're an avid reader, a casual book enthusiast, or just getting started on your reading journey, BookWiz has everything you need to organize, discover, and share your favorite reads.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to empower book lovers worldwide by providing a seamless platform for discovering new books, organizing reading lists, and connecting with fellow book enthusiasts. We believe in the transformative power of reading and aim to make the reading experience more enjoyable and accessible for everyone.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="BookWiz Features" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-4 text-lg">
              <li>Discover new books across various genres.</li>
              <li>Create personalized reading lists to keep track of your favorite books.</li>
              <li>Connect with other book lovers and share recommendations.</li>
              <li>Stay updated with the latest book releases and author news.</li>
              <li>Access your book collection from any device, anywhere, anytime.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-lg">
            Ready to dive into the world of books? Sign up for BookWiz today and start discovering, organizing, and sharing your favorite reads!
          </p>
          {/* Add Sign Up button or link here */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

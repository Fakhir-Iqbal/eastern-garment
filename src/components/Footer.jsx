import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8"> {/* Reduced padding */}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Eastern Garments Info Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">EASTERN GARMENTS</h3>
            <p className="text-sm leading-relaxed">
              Eastern Garments is a global manufacturer and exporter of private label apparel products for men, women, and children. Since its inception in 1976, the Company has continually strived to create products that follow a body-before-fabric philosophy, placing equal emphasis on comfort, aesthetics, and quality.
            </p>
            {/* Logo Section */}
            <div className="mt-8 ml-8"> {/* Reduced margin-top */}
              <img
                src="/logo.png" // Replace with the actual logo URL
                alt="Eastern Garments Logo"
                className="w-48 h-auto" // Adjust width to 12rem, height auto for proportional scaling
              />
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">GET CONNECTED</h3>
            <p className="text-sm mb-4">
              <strong className="font-medium">Contact Us</strong>
              <br />
              Karachi office
              <br />
              B-58, S.I.T.E
              <br />
              Phone: <span className="text-blue-400">+92-21-111-704</span>
            </p>
            <div className="mb-4">
              {/* Map Location Link */}
              <a
                href="https://www.google.com/maps/place/11400+W+Olympic+Blvd+%23200,+Los+Angeles,+CA+90064,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg shadow-lg text-blue-400 hover:text-blue-600"
              >
                <img
                  src="https://media.istockphoto.com/id/1308342065/vector/folded-location-map-with-marker-city-map-with-pin-pointer-gps-navigation-map-with-city.jpg?s=612x612&w=0&k=20&c=E9DP4dIwSdwaveNwcYU2LzBeKuBoKLa7nsTxTWDHObw=" // Use a placeholder or a map thumbnail
                  alt="Map location"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="text-center mt-2 text-blue-400">Click to View Location on Map</div>
              </a>
            </div>
          </div>

          {/* Queries Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Queries</h3>
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="mt-8 text-center"> {/* Reduced margin-top */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="text-white hover:text-blue-400">Home</a>
            <a href="#about" className="text-white hover:text-blue-400">About</a>
            <a href="#testimonials" className="text-white hover:text-blue-400">Testimonial</a>
            <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
            <a href="#product" className="text-white hover:text-blue-400">Product</a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400"> {/* Reduced margin-top */}
          <p>&copy; {new Date().getFullYear()} Eastern Garments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

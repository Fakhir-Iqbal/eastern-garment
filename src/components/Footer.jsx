import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151160] text-white py-8">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-6">EASTERN GARMENTS</h3>
            <p className="text-sm leading-relaxed w-2/3">
              Eastern Garments is a global manufacturer and exporter of private label apparel products for men, women, and children. Since its inception in 1976, the Company has continually strived to create products that follow a body-before-fabric philosophy, placing equal emphasis on comfort, aesthetics, and quality.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
            <p className="text-sm mb-4">
              Karachi office B-58, S.I.T.E
              <br />
              Phone: <span className="text-blue-400">+92-21-111-704</span>
            </p>
            <div className="mb-4">
              <a
                href="https://www.google.com/maps/place/11400+W+Olympic+Blvd+%23200,+Los+Angeles,+CA+90064,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fullrounded-lg shadow-lg text-blue-400 hover:text-blue-600"
              >
                <img
                  src="https://media.istockphoto.com/id/1308342065/vector/folded-location-map-with-marker-city-map-with-pin-pointer-gps-navigation-map-with-city.jpg?s=612x612&w=0&k=20&c=E9DP4dIwSdwaveNwcYU2LzBeKuBoKLa7nsTxTWDHObw=" // Use a placeholder or a map thumbnail
                  alt="Map location"
                  className="w-3/4 h-44 rounded-lg shadow-lg"
                />
              </a>
            </div>
          </div>

          {/* Queries Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Queries</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 rounded-sm text-xs text-black outline-none"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-sm text-xs text-black outline-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded-sm text-xs text-black outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full border-4 border-blue-400 hover:border-blue-600 text-white p-2 rounded-sm transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <hr className='my-4' />
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eastern Garments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

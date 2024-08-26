import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/waves.webp'; // Import the image

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-500 to-gray-300">
      {/* Header Section */}
      <header className="text-white text-center py-10">
        <h1 className="text-5xl font-extrabold mb-4">
          Creative Web Design Solutions
        </h1>
        <p className="text-lg font-light mb-8">
          We craft beautiful websites that drive your business forward.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition">
            Our Services
          </button>
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get in Touch
          </button>
        </div>
      </header>

      {/* Main Image Section */}
      <div className="flex justify-center items-center w-full px-4 mt-10">
        <img
          src={sunImage}
          alt="Sun"
          className="w-full max-w-md rounded-lg shadow-lg transform transition hover:scale-105"
        />
      </div>

      {/* Additional Section */}
      <section className="bg-white w-full py-16 mt-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            At WebDesignCo, we believe in creating websites that are not just visually stunning, but also provide a seamless user experience. Our team of expert designers and developers work closely with you to bring your vision to life, ensuring that your online presence truly represents your brand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Custom Design</h3>
              <p className="text-gray-600">
                We create bespoke designs tailored to your business needs, ensuring that your website stands out from the competition.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Responsive Layouts</h3>
              <p className="text-gray-600">
                Our websites are built to look great on all devices, from desktops to smartphones, providing a seamless experience for your users.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">SEO Optimization</h3>
              <p className="text-gray-600">
                We ensure that your website is optimized for search engines, helping you reach a wider audience and grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-700 py-8 bg-white w-full">
        <p className="text-sm">
          &copy; 2024 WebDesignCo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Indy</h3>
            <p className="text-gray-300">
              Your guide to experiencing the best of Indianapolis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@visitindy.com<br />
              Phone: (317) 555-0123
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-y-2 text-gray-300">
              <div>Facebook</div>
              <div>Twitter</div>
              <div>Instagram</div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2024 Visit Indy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
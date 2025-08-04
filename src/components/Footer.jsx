
import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t mt-10 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center flex-col sm:flex-row gap-3">
        <span>© {new Date().getFullYear()} MyFoodie. All rights reserved.</span>
        <span className="text-green-600 font-semibold">Made with ❤️ by Shreya Changole</span>
      </div>
    </footer>
  );
}

export default Footer;

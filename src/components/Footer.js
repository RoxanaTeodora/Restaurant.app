import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="relative  bg-[#424E49] px-4 pt-20">
        <nav
          aria-label="Footer Navigation"
          class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <a href="#" class="font-medium text-white">
            Demo
          </a>
          <a href="#" class="font-medium text-white">
            Support
          </a>
          <a href="#" class="font-medium text-white">
            Privacy Policy
          </a>
          <a href="#" class="font-medium text-white">
            Terms & Conditions
          </a>
        </nav>
        <p class="py-10 text-center text-gray-300">
          © 2022 Boleno | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;

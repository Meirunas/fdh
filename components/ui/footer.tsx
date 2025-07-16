import React from "react";
import Link from "next/link";
import Image from "next/image";
import Name from "@/public/images/logo.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20 mb-8 md:mb-12 ">
            {/* 1st block */}
            <div>
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="FDH">
                  <Image src={Name} width={60} alt="FDH Logo" />
                </Link>
              </div>
              <div className="text-gray-400">
                “A website without visitors is like a ship lost in the horizon.”
                &ndash; Dr. Christopher Dayagdag
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="grid sm:grid-cols-2 gap-8 lg:justify-items-end">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      FDH Site
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      MDN
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://react.dev/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      React
                    </Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}

            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href=""
                  className="flex justify-center items-center hover:text-white  rounded-full transition duration-150 ease-in-out"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.33 53.33 0 1 1 53.34-53.33 53.33 53.33 0 0 1-53.33 53.33zM447.9 448h-92.4V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8V448h-92.5V148.9h88.8v40.8h1.3c12.4-23.5 42.7-48.4 87.9-48.4 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; FDH. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 lg:mt-0 bg-gray-200 pointer-events-none z-0"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid py-8 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <img
                  className="mx-auto"
                  src={require("../images/logo.png").default}
                  width="50"
                  height="50"
                  alt="Hero"
                />
              </Link>
            </div>
            <div className="text-sm md:text-base text-gray-600 mb-5">
              <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                이용약관
              </span>{" "}
              |{" "}
              <a
                href="https://sites.google.com/view/cheffi-privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                개인정보 처리방침
              </a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <ul className="text-sm md:text-base">
              <li className="mb-1">
                <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  서울특별시 강남구 테헤란로 311(역삼동) 아남타워 7층
                </span>
              </li>
              <li className="mb-1">
                <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  sh0705k@gmail.com
                </span>
              </li>
            </ul>
            <p className="text-xs md:text-sm text-gray-400 mt-10 pt-5">
              * Cheffi는 과학기술정보통신부와 정보통신기획평가원이 주관하고
              한국정보산업연합회에서 운영하는 SW마에스트로 12기 연수생
              Cheffi팀이 개발한 서비스입니다.
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 text-center ">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 w-full">
            © 2021. Cheffi all rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

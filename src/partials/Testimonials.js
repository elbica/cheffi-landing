import React from "react";

function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 text-gray-600">📝 생생 후기 📝</h2>
            <p
              className="text-xl text-gray-600 w-3/5 mx-auto"
              data-aos="zoom-y-out"
            >
              Cheffi 서비스를 실제로 이용한 분들의 생생 어린 후기에요!
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-6" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-8 md:px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-carrot-100"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img
                    className="relative rounded-full"
                    src={require("../images/logo.png").default}
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-base font-medium mb-4 text-gray-500 sm:text-xl">
                  “ 지금까지 다른 레시피 어플을 쓰면서, 레시피를 찾아도 가지고
                  있지 않은 재료가 많아 요리 하기 어려웠어요. 하지만 Cheffi는
                  내가 가진 재료들로 만들 수 있는 음식을 내 취향에 맞게 추천해
                  줘서 너무 편리하고 좋았어요! “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Elbi
                </cite>
                <div className="text-gray-600">
                  <span>@Cheffi User</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

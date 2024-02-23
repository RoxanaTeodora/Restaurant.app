import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <main>
        <section>
          <div
            style={{
              backgroundImage: "linear-gradient(#424E49 50%, white 50%)",
            }}
          >
            <div className="description">
              <img
                src={require("../../assets/header.jpg")}
                alt="..."
                className="img"
              />
              <div>
                <p className="title">Little Lemon</p>
                <p className="p-description">
                  Where tradition meets innovation in the realm of Italian
                  culinary art. We specialize in crafting authentic traditional
                  recipes, elevated with a modern flair to deliver an
                  unforgettable and genuine dining experience. Each dish
                  prepared in our kitchen reflects our passion for fresh
                  ingredients and the authenticity of Italian gastronomy.
                </p>
                <div className="btn-res">
                  <button
                    type="button"
                    className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                  >
                    <Link to="/reservation" className="text-black">
                      Reservation
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pl-0 flex bg-[#262626] ">
            <p className=" title inline-flex items-center justify-between ml-40">
              This Week Specials
            </p>

            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={25}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div class="relative m-10 flex w-full max-w-s flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <div class="relative h-80 overflow-hidden rounded-xl">
                    <img src={require("../../assets/card-1.jpg")} alt="..." />
                  </div>
                  <div class="mt-4 px-5 pb-5">
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">
                          Spaghetti
                        </span>
                      </p>

                      <span class="mr-2 ml-3 rounded px-2.5 text-xl py-0.5 font-semibold">
                        $12.99
                      </span>
                    </div>
                    <p>
                      Incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in volu
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative m-10 flex w-full max-w-s flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <div class="relative h-80 overflow-hidden rounded-xl">
                    <img src={require("../../assets/card-2.jpg")} alt="..." />
                  </div>
                  <div class="mt-4 px-5 pb-5">
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">
                          Spaghetti
                        </span>
                      </p>

                      <span class="mr-2 ml-3 rounded px-2.5 text-xl py-0.5 font-semibold">
                        $12.99
                      </span>
                    </div>
                    <p>
                      Incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in volu
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative m-10 flex w-full max-w-s flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <div class="relative  h-80 overflow-hidden rounded-xl">
                    <img src={require("../../assets/card-1.jpg")} alt="..." />
                  </div>
                  <div class="mt-4 px-5 pb-5">
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">
                          Spaghetti
                        </span>
                      </p>

                      <span class="mr-2 ml-3 rounded px-2.5 text-xl py-0.5 font-semibold">
                        $12.99
                      </span>
                    </div>
                    <p>
                      Incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in volu
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative m-10 flex w-full max-w-s flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <div class="relative  h-80 overflow-hidden rounded-xl">
                    <img src={require("../../assets/card-1.jpg")} alt="..." />
                  </div>
                  <div class="mt-4 px-5 pb-5">
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">
                          Spaghetti
                        </span>
                      </p>

                      <span class="mr-2 ml-3 rounded px-2.5 text-xl py-0.5 font-semibold">
                        $12.99
                      </span>
                    </div>
                    <p>
                      Incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in volu
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative m-10 flex w-full max-w-s flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <div class="relative  h-80 overflow-hidden rounded-xl">
                    <img src={require("../../assets/card-1.jpg")} alt="..." />
                  </div>
                  <div class="mt-4 px-5 pb-5">
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">
                          Spaghetti
                        </span>
                      </p>

                      <span class="mr-2 ml-3 rounded px-2.5 text-xl py-0.5 font-semibold">
                        $12.99
                      </span>
                    </div>
                    <p>
                      Incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in volu
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="relative m-10 flex w-full max-w-s flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <div class="relative h-80 overflow-hidden rounded-xl">
                    <img src={require("../../assets/card-1.jpg")} alt="..." />
                  </div>
                  <div class="mt-4 px-5 pb-5">
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">
                          Spaghetti
                        </span>
                      </p>

                      <span class="mr-2 ml-3 rounded px-2.5 text-xl py-0.5 font-semibold">
                        $12.99
                      </span>
                    </div>
                    <p>
                      Incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in volu
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* review cards */}
          <div className="inline-flex ">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                // style="background-image: url('/img/card-left.jpg')"
              ></div>

              <div class="my-40">
                <div class="relative flex w-80 items-center overflow-hidden rounded-lg bg-white p-4 shadow hover:shadow-md">
                  <div class="shrink-0 h-12 w-12 rounded-full bg-gray-100"></div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-800">John doe</p>
                    <div className="flex">
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300 flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600">
                      The service was a bit slow, but the flavors in the dishes
                      made up for it.The food is absolutely delicious
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                // style="background-image: url('/img/card-left.jpg')"
              ></div>

              <div class="my-40">
                <div class="relative flex w-80 items-center overflow-hidden rounded-lg bg-white p-4 shadow hover:shadow-md">
                  <div class="shrink-0 h-12 w-12 rounded-full bg-gray-100"></div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-800">John doe</p>
                    <div className="flex">
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300 flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600">
                      The service was a bit slow, but the flavors in the dishes
                      made up for it.The food is absolutely delicious
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                // style="background-image: url('/img/card-left.jpg')"
              ></div>

              <div class="my-40">
                <div class="relative flex w-80 items-center overflow-hidden rounded-lg bg-white p-4 shadow hover:shadow-md">
                  <div class="shrink-0 h-12 w-12 rounded-full bg-gray-100"></div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-800">John doe</p>
                    <div className="flex">
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300 flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600">
                      The service was a bit slow, but the flavors in the dishes
                      made up for it.The food is absolutely delicious
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

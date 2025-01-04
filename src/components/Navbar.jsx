import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearchButton = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search?q=${search}`
      );
      const results = await response.data?.news;
  
      setData(results);
  
      // Navigasi ke SearchPages dengan data hasil pencarian
      navigate("/search", { state: { results } });
    } catch (err) {
      console.error(err);
    }
  };
  console.log(data);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full bg-[#C9C7C5]">
      <div className="h-auto max-w-screen-xl mx-auto shadow-none">
        {/* Navbar Container */}
        <div className="navbar w-full font-mulish px-4 sm:px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Hamburger Button */}
            <div className="z-40">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <div className="flex-none sm:hidden">
                  <label
                    className="btn btn-square btn-ghost drawer-button"
                    htmlFor="my-drawer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-white text-base-content min-h-full w-80 p-4 gap-5">
                  {/* Sidebar content here */}
                  <a className="btn btn-ghost text-2xl sm:text-4xl  bg-gradient-to-b from-[#4C32EF] to-[#A50C30] bg-clip-text text-transparent">
                    Beritaku
                  </a>
                  <li>
                    <Link
                      to={"/category/news"}
                      className={`btn w-full rounded-full  border-none hover:bg-[#BC1529] hover:text-white   ${
                        isActive("/category/news")
                          ? "bg-[#BC1529] text-white"
                          : " bg-gray-300 text-black"
                      } text-2xl font-bold shadow-purple-400/50 shadow-md`}
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/category/hukum"}
                      className={`btn w-full rounded-full border-none  hover:bg-[#BC1529] hover:text-white ${
                        isActive("/category/hukum")
                          ? "bg-[#BC1529] text-white"
                          : "bg-gray-300 text-black "
                      } text-2xl font-bold shadow-purple-400/50 shadow-md`}
                    >
                      Hukum
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/category/ekonomi"}
                      className={`btn w-full rounded-full  border-none hover:bg-[#BC1529] hover:text-white   ${
                        isActive("/category/ekonomi")
                          ? "bg-[#BC1529] text-white"
                          : " bg-gray-300 text-black"
                      } text-2xl font-bold shadow-purple-400/50 shadow-md`}
                    >
                      Ekonomi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/category/politik"}
                      className={`btn w-full rounded-full  border-none hover:bg-[#BC1529] hover:text-white   ${
                        isActive("/category/politik")
                          ? "bg-[#BC1529] text-white"
                          : " bg-gray-300 text-black"
                      } text-2xl font-bold shadow-purple-400/50 shadow-md`}
                    >
                      Politik
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/category/keuangan"}
                      className={`btn w-full rounded-full  border-none hover:bg-[#BC1529] hover:text-white   ${
                        isActive("/category/keuangan")
                          ? "bg-[#BC1529] text-white"
                          : " bg-gray-300 text-black"
                      } text-2xl font-bold shadow-purple-400/50 shadow-md`}
                    >
                      Keuangan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/category/internasional"}
                      className={`btn w-full rounded-full  border-none hover:bg-[#BC1529] hover:text-white   ${
                        isActive("/category/internasional")
                          ? "bg-[#BC1529] text-white"
                          : " bg-gray-300 text-black"
                      } text-2xl font-bold shadow-purple-400/50 shadow-md`}
                    >
                      Internasional
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo and Search Bar */}
            <div
              className={`flex items-center sm:w-full transition-all duration-300 ${
                showSearch ? "gap-4" : "justify-between"
              }`}
            >
              <a className="btn btn-ghost text-2xl sm:text-4xl  bg-gradient-to-b from-[#4C32EF] to-[#A50C30] bg-clip-text text-transparent">
                Beritaku
              </a>

              {showSearch && (
                <div className="flex items-center flex-grow gap-4">
                  <input
                    type="text"
                    placeholder="Apa yang ingin anda baca hari ini?"
                    className="input input-bordered rounded-3xl w-full text-xs lg:text-xl"
                    onChange={(e) => setSearch(e.target.value)}
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  />
                  <button
                    className="btn btn-active rounded-full shadow-2xl text-white bg-[#BC1529] hover:bg-[#BC1529]"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    onClick={handleSearchButton}
                  >
                    Cari
                  </button>
                </div>
              )}
            </div>
            {!showSearch && (
              <button
                className="btn btn-ghost text-xl text-white"
                onClick={toggleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden px-4 py-4">
          <button
            className="btn w-full rounded-full shadow-2xl text-white bg-[#BC1529] hover:bg-[#BC1529]"
            onClick={toggleDropdown}
          >
            <div className="text-2xl font-bold">Menu</div>
          </button>

          {showDropdown && (
            <div className="mt-4 bg-white rounded-lg shadow-lg">
              {[
                "/category/news",
                "/category/hukum",
                "/category/ekonomi",
                "/category/politik",
                "/category/keuangan",
                "/category/internasional",
              ].map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  className={`block w-full text-left px-4 py-2 ${
                    isActive(path)
                      ? "bg-[#BC1529] text-white"
                      : "hover:bg-[#BC1529] "
                  } shadow-purple-600`}
                >
                  {path === "/" ? "NEWS" : path.split("/")[2].toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 px-4 sm:gap-6 lg:gap-12 py-4 shadow-lg">
          {[
            { path: "/category/news", label: "NEWS" },
            { path: "/category/hukum", label: "HUKUM" },
            { path: "/category/ekonomi", label: "EKONOMI" },
            { path: "/category/politik", label: "POLITIK" },
            { path: "/category/keuangan", label: "KEUANGAN" },
            { path: "/category/internasional", label: "INTERNASIONAL" },
          ].map(({ path, label }, index) => (
            <Link
              key={index}
              to={path}
              className={`btn rounded-full w-full sm:w-36 ${
                isActive(path) ? "bg-[#BC1529] " : "hover:bg-[#BC1529] "
              } shadow-purple-700`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

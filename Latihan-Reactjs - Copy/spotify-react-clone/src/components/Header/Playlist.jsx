/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Icon } from "components/Icons"; 
import gambar from "./img/Capture.PNG"
import gambar1 from "./img/lagu.PNG"
import gambar2 from "./img/Capture1.PNG"
import gambar3 from "./img/Capture2.PNG"
import gambar4 from "./img/Capture3.PNG"
import gambar5 from "./img/Capture4.PNG"
import gambar6 from "./img/Capture5.PNG"
import like from "./img/like.PNG"


export default function Playlist() {
  return (
    <nav className="flex">
      <ul>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
              <img width="45" height="45" src={like} alt="" />
            </span>

          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar} alt="" />
            </span>
            
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar1} alt="" />
            </span>
            
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar2} alt="" />
            </span>
            
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar3} alt="" />
            </span>
            
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar4} alt="" />
            </span>
            
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar5} alt="" />
            </span>
          
          </a>
        </li>
        <li className="mb-2">
          <a
            className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group"
            href="#"
          >
            <span className="p-[4px] opacity-70 group-hover:opacity-100">
            <img width="45" height="45" src={gambar6} alt="" />
            </span>
            
          </a>
        </li>
      </ul>
    </nav>
  );
}

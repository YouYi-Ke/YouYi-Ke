"use client";

import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import { animate } from 'animejs';

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="w-[400px] h-[400px] rounded-2xl border-2 border-white flex flex-col items-center justify-center space-y-6">
        <div className="relative w-[100px] h-[100px] overflow-hidden rounded-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <Image src="/headshot.JPG" alt="Headshot" fill className="object-cover" />
        </div>
        {/* introduction */}
        <h1 className="text-white text-2xl">柯侑易</h1>
        <h3 className="text-white text-xl">Know more...</h3>
        
        {/* socialLinks */}
        <div className="flex justify-center items-center space-x-6 mt-4 text-white text-3xl">
          <a href="https://www.instagram.com/yoyi_0602/" target="_blank" rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-300">
            <FaInstagram />
          </a>
          <a href="https://github.com/YouYi-Ke" target="_blank" rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/侑易-柯-3a393b2b8/" target="_blank" rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 duration-300">
            <FaLinkedin />
          </a>
        </div>
        {/* contents */}
        
      </div>
    </div>
  );
}
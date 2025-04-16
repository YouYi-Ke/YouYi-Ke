"use client";

import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import { animate } from 'animejs';

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  return(
      <div className="w-full h-full rounded-2xl border-2 border-white flex flex-col items-center justify-center">
        <div className="relative w-[100px] h-[100px] overflow-hidden rounded-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <Image src="/headshot.JPG" alt="Headshot" fill className="object-cover" />
        </div>
        {/* introduction */}
        <h1 className="text-white text-2xl">This is Ethan!</h1>
        <h3 className="text-white text-xl">Philosophy | Digital Content | Computer Science</h3>
        {/* contents */}
      </div>
  );
}
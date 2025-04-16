"use client";

import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import { animate } from 'animejs';

export default function aboutMe() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  return (
    <div className="w-full h-full bg-black flex rounded-2xl border-2 border-white items-center justify-center">
      
        <h1>about</h1>
    
    </div>
  );
}
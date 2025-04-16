import { Geist, Geist_Mono } from "next/font/google";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./globals.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ethan",
  description: "Ethan's playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen flex gap-5 bg-black p-8 space-x-6">
          <div className="w-[400px] h-full rounded-2xl bg-black flex-col justify-start space-y-6">
            <div className="w-[300px] h-[300px] rounded-2xl border-2 border-white flex flex-col items-center justify-center space-y-4">
              <div className="relative w-[100px] h-[100px] overflow-hidden rounded-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Image src="/headshot.JPG" alt="Headshot" fill className="object-cover" />
              </div>
              {/* introduction */}
              <h1 className="text-white text-2xl">柯侑易</h1>
              <h3 className="text-white text-xl">cooking, running, coding</h3>
              
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
            <div className="w-[300px] h-[400px] rounded-2xl flex flex-col items-center justify-center space-y-6">
              <Link href="/aboutMe" className="w-full h-[84px] p-6 bg-none border-white border-2 rounded-2xl">
                <h1 className="text-white text-sm">About Me</h1>
              </Link>
              <Link href="/project" className="w-full h-[84px] p-6 bg-none border-white border-2 rounded-2xl">
                <h1 className="text-white text-sm">Projects</h1>
              </Link>
              <Link href="/playground" className="w-full h-[84px] p-6 bg-none border-white border-2 rounded-2xl">
                <h1 className="text-white text-sm">Playground</h1>
              </Link>
              <Link href="/school" className="w-full h-[84px] p-6 bg-none border-white border-2 rounded-2xl">
                <h1 className="text-white text-sm">School Activities</h1>
              </Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}



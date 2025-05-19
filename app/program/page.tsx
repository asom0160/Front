"use client";
import Image from "next/image";
import { useState } from "react";

const Program = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const frontendPrograms = [
    { src: "/React.png", alt: "ReactImage", name: "React" },
    { src: "/NextJS.jpg", alt: "NextJSImage", name: "Next.js" },
    { src: "/JavaScript.png", alt: "JavaScriptImage", name: "JavaScript" },
    { src: "/CSS.jpg", alt: "CSSImage", name: "CSS" },
    { src: "/html.png", alt: "HTMLImage", name: "HTML" }
  ];

  const backendPrograms = [
    { src: "/nestjs.png", alt: "NestJSImage", name: "NestJS" },
    { src: "/Express.png", alt: "ExpressImage", name: "Express" },
    { src: "/Nodejs.png", alt: "NodeJSImage", name: "Node.js" },
    { src: "/RESTAPI.png", alt: "RestAPIImage", name: "REST API" }
  ];

  const databasePrograms = [
    { src: "/MySQL.png", alt: "MySQLImage", name: "MySQL" }
  ];

  const renderPrograms = (programs: { src: string; alt: string; name: string }[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {programs.map((program, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-5 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform ${index === currentIndex ? "scale-105 bg-white" : ""
            }`}
          onMouseEnter={() => setCurrentIndex(index)}
          onMouseLeave={() => setCurrentIndex(null)}
        >
          <Image
            src={program.src}
            alt={program.alt}
            width={200}
            height={200}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 hover:scale-110"
          />
          <p className="mt-3 text-sm font-medium text-gray-700 tracking-wide text-center">
            {program.name}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-24 bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <h1 className="text-4xl font-bold mb-16 text-center text-gray-800 drop-shadow-sm">💻 Program Skills</h1>

      {/* 프론트엔드 */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-700 underline underline-offset-4">Frontend</h2>
        {renderPrograms(frontendPrograms)}
      </div>

      {/* 백엔드 */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700 underline underline-offset-4">Backend</h2>
        {renderPrograms(backendPrograms)}
      </div>

      {/* 데이터베이스 */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center text-yellow-700 underline underline-offset-4">Database</h2>
        {renderPrograms(databasePrograms)}
      </div>
    </section>
  );
};

export default Program;

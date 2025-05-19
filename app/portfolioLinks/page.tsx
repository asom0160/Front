"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Project } from "../type/type";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PortfolioLinks = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/projects")
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <motion.section
      className="w-full container mx-auto px-6 py-16 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h1
        className="text-4xl font-extrabold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Portfolio
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="duration-700 relative flex flex-col bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            variants={cardVariants}
          >
            <div className="w-full h-70 mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {project.title}
              </h2>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:underline"
              >
                GitHub 코드
              </Link>
              <Link
                href={project.url}
                className="inline-flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                바로가기 <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PortfolioLinks;
"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import ProjectCard from "./components/ProjectCard";
import fetchProjects from "./utils/fetchProjects";


export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await fetchProjects();
        if (projectsData && projectsData.projects) {
          setProjects(projectsData.projects);
        } else {
          console.error('Error fetching projects: Data structure is incorrect');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Vercel Projects Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </main>
    <footer className="flex items-center justify-center w-full h-24 bg-gradient-to-t from-gray-100 dark:from-black">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-8"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className="w-20 h-auto dark:invert" />
      </a>
    </footer>
    </div>
  );
}
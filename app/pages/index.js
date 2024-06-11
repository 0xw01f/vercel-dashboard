// pages/index.js

import { useEffect, useState } from 'react';
import fetchProjects from '../utils/fetchProjects';
import ProjectCard from '../components/ProjectCard';

const IndexPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Vercel Projects Dashboard</h1>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

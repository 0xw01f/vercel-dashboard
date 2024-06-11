// utils/fetchProjects.js
"use server";

const fetchProjects = async () => {
  
  try {
    const response = await fetch('https://api.vercel.com/v6/projects?teamId=0xw01fs-projects', {
      headers: {
        Authorization: `Bearer ${process.env.MY_VERCEL_API_KEY}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return { projects: data.projects }; // Return an object with the 'projects' key
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null; // Return null in case of error
  }
};

export default fetchProjects;
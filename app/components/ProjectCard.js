// components/ProjectCard.js

const ProjectCard = ({ project }) => {
  const { name, targets } = project;
  const { production } = targets;
  const readyState = production?.readyState;

  // Determine the background color based on the readyState
  let bgColorClass = 'bg-white dark:bg-gray-800';
  if (readyState === 'READY') {
    bgColorClass = 'bg-green-500';
  } else if (readyState === 'ERROR') {
    bgColorClass = 'bg-red-500';
  }

  return (
    <div className={`${bgColorClass} rounded-lg shadow-lg p-6`}>
      <h2 className="text-lg font-bold mb-2">{name}</h2>

      {production && (
        <div>
          <p>Ready State: {production.readyState}</p>
          <p>Private: {production.isPrivate ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

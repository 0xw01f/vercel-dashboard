// components/ProjectCard.js

const ProjectCard = ({ project }) => {
  const { name, targets } = project;
  const { production } = targets;
  const readyState = production?.readyState;

  // Determine the background color based on the readyState, bg-gradient-to-bl from-sky-800 via-sky-950 to-indigo-950
  let bgColorClass = 'bg-white dark:bg-gray-800';
  if (readyState === 'READY') {
    bgColorClass = 'bg-gradient-to-bl from-emerald-900 via-emerald-700 to-emerald-950';
  } else if (readyState === 'ERROR') {
    bgColorClass = 'bg-gradient-to-bl from-rose-950 via-rose-900 to-red-950';
  } else if (readyState === 'BUILDING') {
    bgColorClass = 'bg-gradient-to-bl from-amber-900 via-orange-800 to-amber-950';
  } else {
    bgColorClass = 'bg-gradient-to-bl from-sky-800 via-sky-950 to-indigo-950';
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

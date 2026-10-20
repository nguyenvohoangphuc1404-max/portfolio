import ProjectCard from './ProjectCard.jsx';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="text-gray-500 py-4">Không có dự án phù hợp.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 my-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
export default function ProjectCard({ project }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-800">
      <h3 className="text-lg font-semibold">
        {project.title}
      </h3>
      <p className="mt-2">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="border px-2 rounded text-sm">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
export function ProjectCard({
  title,
  description,
  tags,
  demoLink,
  sourceLink,
}: {
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  sourceLink: string;
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-xl">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={demoLink} className="text-blue-600 hover:underline text-sm">
          Demo
        </a>
        <a href={sourceLink} className="text-blue-600 hover:underline text-sm">
          Source
        </a>
      </div>
    </div>
  );
}

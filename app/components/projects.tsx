import { getProjects } from "app/utils";
import Link from "next/link";

export function Projects() {
  let allProjects = getProjects();

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            a.metadata.line &&
            b.metadata.line &&
            a.metadata.line < b.metadata.line
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg italic w-[400px] tabular-nums">
                {post.metadata?.description}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

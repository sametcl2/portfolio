import { CustomMDX } from "app/components/mdx";
import { baseUrl } from "app/sitemap";
import { getProjects } from "app/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let { title } = project.metadata;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${baseUrl}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}

export default function Project({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Experiences",
            headline: project.metadata.title,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              "@type": "Samet Sahin",
              name: project.metadata.title,
            },
          }),
        }}
      />
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl tracking-tight bg-gradient-to-r from-blue-500 to-purple-400 inline-block text-transparent bg-clip-text">
          {project.metadata.title}
        </h1>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm"></div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}

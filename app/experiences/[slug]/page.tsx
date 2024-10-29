import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatExperienceDate, getExperiences } from "app/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let posts = getExperiences();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getExperiences().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, startDate, quitDate, position, image } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    position,
    openGraph: {
      title,
      position,
      type: "article",
      startDate,
      quitDate,
      url: `${baseUrl}/experiences/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      position,
      images: [ogImage],
    },
  };
}

export default function Experience({ params }) {
  let post = getExperiences().find(
    (experience) => experience.slug === params.slug
  );

  if (!post) {
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
            headline: post.metadata.title,
            startDate: post.metadata.startDate,
            position: post.metadata.position,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/experiences/${post.slug}`,
            author: {
              "@type": "Samet Sahin",
              name: post.metadata.title,
            },
          }),
        }}
      />
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <p className="text-lg tracking-tighter mt-2">
          {post.metadata.position}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {`${formatExperienceDate(
            post.metadata.startDate
          )} - ${formatExperienceDate(post.metadata.quitDate)}`}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

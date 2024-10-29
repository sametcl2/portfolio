import { Experiences } from "app/components/posts";

export const metadata = {
  title: "Experiences",
  description: "Read my experiences",
};

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 tracking-tighter">
          My Experiences
        </h1>
        <p className="text-sm mb-2">
          You can click each to see more details and projects.
        </p>
      </div>
      <Experiences />
    </section>
  );
}

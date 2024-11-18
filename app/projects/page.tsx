import { Projects } from "app/components/projects";

export const metadata = {
  title: "Experiences",
  description: "Read my experiences",
};

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 tracking-tight bg-gradient-to-r from-blue-500 to-purple-400  inline-block text-transparent bg-clip-text">
          My Projects
        </h1>
        <p className="text-sm mb-2">The projects that I want to mention</p>
      </div>
      <Projects />
    </section>
  );
}

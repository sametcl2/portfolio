import Image from "next/image";
import { CustomMDX } from "./components/mdx";
import { getSummary } from "./utils";

export default function Page() {
  const [summary] = getSummary();

  return (
    <section>
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-600 via-green-500 to-purple-400 text-transparent bg-clip-text">
          <h1 className="text-3xl font-semibold tracking-tight">Hello</h1>
          <h1 className="text-3xl font-semibold tracking-tight md:ml-2">
            I'm Samet
          </h1>
        </div>
        <Image
          src="/profile.jpeg"
          width={120}
          height={120}
          alt="Picture of the author"
          draggable="false"
          className="rounded-2xl mr-5"
        />
      </div>
      <article className="prose">
        <CustomMDX source={summary.content} />
      </article>
    </section>
  );
}

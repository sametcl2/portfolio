import Image from "next/image";
import { CustomMDX } from "./components/mdx";
import { getSummary } from "./utils";

export default function Page() {
  const [summary] = getSummary();

  return (
    <section>
      <div className="flex flex-row justify-between items-end">
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter ">
          Hello, I'm Samet
        </h1>
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

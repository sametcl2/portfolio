function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-sky-700 dark:hover:text-sky-400"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:sametsahin37@hotmail.com"
          >
            <ArrowIcon />
            <p className="font-medium ml-2 h-7">email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-sky-700 dark:hover:text-sky-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/sametcl2"
          >
            <ArrowIcon />
            <p className="font-medium ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-sky-700 dark:hover:text-sky-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sametsahin0/"
          >
            <ArrowIcon />
            <p className="font-medium ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-sky-700 dark:hover:text-sky-400"
            rel="noopener noreferrer"
            href="/SametSahin_Resume.pdf"
            download
          >
            <ArrowIcon />
            <p className="font-medium ml-2 h-7">cv</p>
          </a>
        </li>
        <li></li>
      </ul>
      <div className="mt-10">
        <a
          className="flex items-center transition-all text-neutral-600 dark:text-neutral-300 hover:text-sky-700 dark:hover:text-sky-400"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/sametcl2/portfolio"
        >
          Made with <span className="mx-1">&#9829;</span> on this repo
        </a>
      </div>
    </footer>
  );
}

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sun, Moon } from "@geist-ui/icons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  return (
    <div className="flex flex-row items-center mt-2 md:mt-0">
      {theme === "light" ? (
        <Moon onClick={() => setTheme("dark")} />
      ) : (
        <Sun onClick={() => setTheme("light")} />
      )}
    </div>
  );
}

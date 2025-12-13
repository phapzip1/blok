import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-[2rem] font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-[1.5rem] font-bold">{children}</h2>,
  h3: ({ children }) => <h2 className="text-[1.25rem] font-semibold">{children}</h2>,
  h4: ({ children }) => <h2 className="text-[1.0rem] font-semibold">{children}</h2>,
  h5: ({ children }) => <h2 className="text-[0.875rem] font-semibold">{children}</h2>,
  h6: ({ children }) => <h2 className="text-[1.75rem] font-medium">{children}</h2>,
  img: (props) => <Image {...props as ImageProps} />
};

export function useMDXComponents(): MDXComponents {
  return components;
}
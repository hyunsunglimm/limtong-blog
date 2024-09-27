import Link from "next/link";
import { ReactNode } from "react";

type HeadingProps = {
  id: string;
  children: ReactNode;
};

export const h1 = ({ id, children }: HeadingProps) => (
  <h1 id={id} className="text-4xl font-bold mt-12 mb-4 group">
    <Link href={`#${id}`}>
      {children}
      <span className="ml-4 opacity-0 group-hover:opacity-100 transition">
        #
      </span>
    </Link>
  </h1>
);

export const h2 = ({ id, children }: HeadingProps) => (
  <h2 id={id} className="text-3xl font-bold mt-10 mb-4 group">
    <Link href={`#${id}`}>
      {children}
      <span className="ml-4 opacity-0 group-hover:opacity-100 transition">
        #
      </span>
    </Link>
  </h2>
);

export const h3 = ({ id, children }: HeadingProps) => (
  <h3 id={id} className="text-2xl font-bold mt-8 mb-4 group">
    <Link href={`#${id}`}>
      {children}
      <span className="ml-4 opacity-0 group-hover:opacity-100 transition">
        #
      </span>
    </Link>
  </h3>
);

export const h4 = ({ id, children }: HeadingProps) => (
  <h4 id={id} className="text-xl font-bold mt-6 mb-4 group">
    <Link href={`#${id}`}>
      {children}
      <span className="ml-4 opacity-0 group-hover:opacity-100 transition">
        #
      </span>
    </Link>
  </h4>
);

export const h5 = ({ id, children }: HeadingProps) => (
  <h5 id={id} className="text-lg font-bold mt-4 mb-2 group">
    <Link href={`#${id}`}>
      {children}
      <span className="ml-4 opacity-0 group-hover:opacity-100 transition">
        #
      </span>
    </Link>
  </h5>
);

export const h6 = ({ id, children }: HeadingProps) => (
  <h6 id={id} className="font-bold mt-4 mb-2 group">
    <Link href={`#${id}`}>
      {children}
      <span className="ml-4 opacity-0 group-hover:opacity-100 transition">
        #
      </span>
    </Link>
  </h6>
);

import { ReactNode, ReactElement } from "react";

export const Ul = ({ children }: { children: ReactNode[] }) => (
  <ul className="my-2 pl-4">
    {children
      .filter((v): v is ReactElement => typeof v === "object" && v !== null)
      .map((v, i) => (
        <li key={i} className="my-1 list-dot">
          {v.props.children}
        </li>
      ))}
  </ul>
);

export const Ol = ({ children }: { children: ReactNode[] }) => {
  return (
    <ol className="my-2">
      {children
        .filter((v): v is ReactElement => typeof v === "object" && v !== null)
        .map((v, i) => (
          <li key={i} className="my-2">
            {i + 1}. {v.props.children}
          </li>
        ))}
    </ol>
  );
};

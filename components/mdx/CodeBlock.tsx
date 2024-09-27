import { ReactNode, ReactElement } from "react";

export const CodeBlock = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const isTitle = Array.isArray(children);

  if (isTitle) {
    const title = (children[0] as ReactElement).props;
    const code = (children[1] as ReactElement).props;

    return (
      <figure className="border border-neutral-700 rounded-md my-6 overflow-hidden">
        <figcaption
          className="px-4 py-2 bg-neutral-700 text-lg font-semibold"
          {...title.props}
        >
          {title.children}
        </figcaption>
        <pre {...code.children.props}>{code.children}</pre>
      </figure>
    );
  } else {
    return (
      <figure className="border border-neutral-700 rounded-md my-6 overflow-hidden">
        {children}
      </figure>
    );
  }
};

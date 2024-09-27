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

    console.log(code.children);

    return (
      <figure className="border border-neutral-700 rounded-md overflow-x-auto">
        <figcaption {...title.props}>{title.children}</figcaption>
        <pre {...code.children.props}>{code.children}</pre>
      </figure>
    );
  }

  return <figure>{children}</figure>;
};

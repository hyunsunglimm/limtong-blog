import { PropsWithChildren } from "react";

import * as Icon from "./Icons";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warn" | "danger" | "normal";

type CalloutProps = PropsWithChildren<{
  type?: CalloutType;
  title?: string;
}>;

type IconType = {
  [key: string]: {
    icon: () => JSX.Element;
    boxClass: string;
  };
};

const metadata: IconType = {
  info: {
    icon: Icon.Info,
    boxClass: "ring ring-blue-500",
  },
  warn: {
    icon: Icon.Warn,
    boxClass: "ring ring-yellow-500",
  },
  danger: {
    icon: Icon.Danger,
    boxClass: "ring ring-red-500",
  },
  normal: {
    icon: Icon.Normal,
    boxClass: "border-l-4 px-6 border-my bg-my/5 rounded-r-sm",
  },
};

export const Callout = (props: CalloutProps) => {
  const type = props.type || "normal";
  const metaObj = metadata[type];
  const Icon = metaObj.icon;
  const boxClassName = metaObj.boxClass;

  const isShort = typeof props.children === "string";

  return (
    <div
      className={cn(
        `my-6 flex items-center gap-3 ${type === "normal" ? "" : "rounded-md px-5 py-2"}`,
        boxClassName
      )}
    >
      {type !== "normal" && (
        <div>
          <Icon />
        </div>
      )}

      <div className="text-lg">
        {isShort ? (
          <p className="leading-7 my-4">{props.children}</p>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
};

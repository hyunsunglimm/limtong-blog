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
    icon: Icon.Warn,
    boxClass: "text-informative-foreground bg-khaki/30",
  },
  warn: {
    icon: Icon.Info,
    boxClass: "text-white bg-warning/20",
  },
  danger: {
    icon: Icon.Danger,
    boxClass: "text-white bg-destructive/20",
  },
  normal: {
    icon: Icon.Normal,
    boxClass: "text-white bg-white/10",
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
        "my-6 flex items-center gap-3 rounded-md px-5 py-2",
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

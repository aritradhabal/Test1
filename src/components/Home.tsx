import type { ReactNode } from "react";

export type HomeDefaultProps = {
  frame?: boolean;
  right?: ReactNode;
  label?: string;
};
export const HomeDefault = ({
  frame = false,
  right,
  label = "All pages",
}: HomeDefaultProps) => {
  const backgroundColor = frame ? "transparent" : "#FFFFFF";
  return (
    <div
      style={{
        display: "flex",
        width: "370px",
        height: "42px",
        top: "20px",
        left: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: "1",
        paddingTop: "8px",
        paddingRight: "15px",
        paddingBottom: "8px",
        paddingLeft: "22px",
        backgroundColor,
        cursor: "pointer",
      }}
    >
      <span
        style={{
          width: "64px",
          height: "18px",
          opacity: 1,
          fontFamily: "Montserrat",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "130%",
          letterSpacing: "0px",
          verticalAlign: "middle",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{
          width: 35,
          height: 35,
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {right}
      </div>
    </div>
  );
};

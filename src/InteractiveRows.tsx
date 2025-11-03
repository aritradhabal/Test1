import {
  DesktopDefault,
  DesktopVariant2,
  DesktopVariant4,
  DesktopVariant5,
  DesktopVariant6,
  DesktopVariant7,
  DesktopVariant8,
  DesktopVariant9,
  DesktopVariant10,
} from "./components/Desktop";
import { type VariantKey } from "./types/ui";
import { useState } from "react";
import { HomeDefault } from "./components/Home";

const renderComponent = (k: VariantKey) => {
  switch (k) {
    case "v2":
      return <DesktopVariant2 frame={true} home={true} />;
    case "v4":
      return <DesktopVariant4 home={true} />;
    case "v5":
      return <DesktopVariant5 home={true} />;
    case "v6":
      return <DesktopVariant6 home={true} />;
    case "v7":
      return <DesktopVariant7 home={true} />;
    case "v8":
      return <DesktopVariant8 frame={true} home={true} />;
    case "v9":
      return <DesktopVariant9 frame={true} home={true} />;
    case "v10":
      return <DesktopVariant10 frame={true} home={true} />;
    default:
      return <DesktopDefault frame={true} home={true} />;
  }
};

export const InteractiveHomeRow = ({ label }: { label?: string }) => {
  const [variant, setVariant] = useState<VariantKey>("default");

  const handleMouseEnter = () => {
    setVariant((prev) => {
      if (prev === "default" || prev === "v10") return "v2";
      if (prev === "v5") return "v6";
      if (prev === "v7") return "v8";
      return prev;
    });
  };

  const handleMouseLeave = () => {
    setVariant((prev) => {
      if (prev === "v4" || prev === "v6") return "v5";
      if (prev === "v2" || prev === "v9" || prev === "v10") return "default";
      if (prev === "v8") return "v10";
      return prev;
    });
  };

  const handleMouseDown = () => {
    setVariant((prev) => {
      if (prev === "v2") return "v9";
      if (prev === "v6") return "v7";
      return prev;
    });
  };

  const handleClick = () => {
    setVariant((prev) => (prev === "v9" ? "v4" : prev));
  };
  const handleMouseMove = () => {
    setVariant((prev) => (prev === "v7" ? "v8" : prev));
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <HomeDefault
        frame={true}
        label={label}
        right={renderComponent(variant)}
      />
    </div>
  );
};

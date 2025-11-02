import { ButtonDefault } from "./Button";
import { InteractiveHomeRow } from "../InteractiveRows";

export const Frame = () => {
  return (
    <div
      style={{
        width: "578px",
        height: "794px",
        opacity: 1,
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "370px",
          height: "326px",
          top: "85px",
          left: "104px",
          position: "absolute",
          borderRadius: "6px",
          opacity: 1,
          borderWidth: "1px",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #EEEEEE",
          boxShadow:
            "0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.1)",
        }}
      >
        <InteractiveHomeRow label="All Pages" />
        <div
          style={{
            width: "370px",
            height: "20px",
            opacity: 1,
            paddingTop: "10px",
            paddingRight: "15px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            gap: "10px",
          }}
        >
          <svg
            width="340"
            height="1"
            viewBox="0 0 340 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.35"
              y1="0.349997"
              x2="339.65"
              y2="0.349997"
              stroke="#CDCDCD"
              stroke-width="0.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div style={{ width: "370px", height: "164px", opacity: 1 }}>
          <InteractiveHomeRow label="Page 1" />
          <InteractiveHomeRow label="Page 2" />
          <InteractiveHomeRow label="Page 3" />
          <InteractiveHomeRow label="Page 4" />
        </div>
        <div
          style={{
            width: "370px",
            height: "20px",
            opacity: 1,
            paddingTop: "10px",
            paddingRight: "15px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            gap: "10px",
          }}
        >
          <svg
            width="340"
            height="1"
            viewBox="0 0 340 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.35"
              y1="0.349997"
              x2="339.65"
              y2="0.349997"
              stroke="#CDCDCD"
              stroke-width="0.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div
          style={{
            width: "370px",
            height: "60px",
            opacity: 1,
            paddingTop: "10px",
            paddingRight: "15px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            gap: "10px",
          }}
        >
          <ButtonDefault />
        </div>
      </div>
    </div>
  );
};

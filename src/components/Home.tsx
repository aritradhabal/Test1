export const HomeDefault = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        padding: "8px 15px 8px 22px",
        width: 370,
        height: 42,
        backgroundColor: "#FFFFFF",
      }}
    >
      <span
        style={{
          color: "#1F2128",
          fontFamily: "Montserrat, ui-sans-serif, system-ui",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "130%",
        }}
      >
        All pages
      </span>
      <div
        style={{
          width: 35,
          height: 35,
          borderRadius: 9999,
          backgroundColor: "#2469F6",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-hidden
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="#FFFFFF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

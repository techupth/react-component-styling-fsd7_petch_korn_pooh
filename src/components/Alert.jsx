// Start coding here
import errorIcon from "../assets/error.svg";
import warnIcon from "../assets/warning.svg";
import infoIcon from "../assets/info.svg";
import succIcon from "../assets/success.svg";
export default function Alert({ type, message }) {
  let style = {};
  let icon;
  if (type === "error") {
    style = {
      backgroundColor: "#F7C7C9",
    };
    icon = <img src={errorIcon} alt="Error Icon" />;
  } else if (type === "warning") {
    style = {
      backgroundColor: "#F8D9C9",
    };
    icon = <img src={warnIcon} alt="Error Icon" />;
  } else if (type === "info") {
    style = {
      backgroundColor: "#F8EBCA",
    };
    icon = <img src={infoIcon} alt="Error Icon" />;
  } else if (type === "success") {
    style = {
      backgroundColor: "#D0F7CF",
    };
    icon = <img src={succIcon} alt="Error Icon" />;
  }

  return (
    <div
      style={{
        ...style,
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {icon}
      <span>{message}</span>
    </div>
  );
}

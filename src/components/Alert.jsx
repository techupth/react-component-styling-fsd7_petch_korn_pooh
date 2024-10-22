// Start coding here
import icon101 from "../assets/icon.svg";
import icon102 from "../assets/icon102.svg";
import icon103 from "../assets/icon103.svg";
import icon104 from "../assets/icon104.svg";

export function Alert({ type }) {
  return (
    <>
      {type === "error" ? (
        <div
          style={{
            padding: "20px 50px",
            backgroundColor: "#F9C8C8",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "80px",
            width: "300px",
          }}
        >
          <img src={icon101} />
          This is error alert box
        </div>
      ) : type === "warning" ? (
        <div
          style={{
            padding: "20px 50px",
            backgroundColor: "#F9D9C8",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "80px",
            width: "300px",
          }}
        >
          <img src={icon102} />
          This is warning alert box
        </div>
      ) : type === "info" ? (
        <div
          style={{
            padding: "20px 50px",
            backgroundColor: "#FAEAC8",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img src={icon103} />
          This is info alert box
        </div>
      ) : (
        <div
          style={{
            padding: "20px 50px",
            backgroundColor: "#CEF7CC",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img src={icon104} /> This is success alert box
        </div>
      )}
    </>
  );
}

// error,warning,info,success

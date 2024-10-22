// Start coding here

export function Alert(props) {
  return (
    <div>
      {props.type === "error" ? (
        <div
          style={{
            padding: "38px",
            width: "650px",
            backgroundColor: "#F9C8C8",
            border: "none",
          }}
        >
          <img src={props.image} />
          <span style={{ padding: "0px", margin: "0px", paddingLeft: "20px" }}>
            {props.message}
          </span>
        </div>
      ) : props.type === "warning" ? (
        <div
          style={{
            padding: "38px",
            width: "650px",
            backgroundColor: "#F9D9C8",
            border: "none",
          }}
        >
          <img src={props.image} />
          <span style={{ padding: "0px", margin: "0px", paddingLeft: "20px" }}>
            {props.message}
          </span>
        </div>
      ) : props.type === "info" ? (
        <div
          style={{
            padding: "38px",
            width: "650px",
            backgroundColor: "#F9EBC8",
            border: "none",
          }}
        >
          <img src={props.image} />
          <span style={{ padding: "0px", margin: "0px", paddingLeft: "20px" }}>
            {props.message}
          </span>
        </div>
      ) : (
        <div
          style={{
            padding: "38px",
            width: "650px",
            backgroundColor: "#CEF7CD",
            border: "none",
          }}
        >
          <img src={props.image} />
          <span style={{ padding: "0px", margin: "0px", paddingLeft: "20px" }}>
            {props.message}
          </span>
        </div>
      )}
    </div>
  );
}

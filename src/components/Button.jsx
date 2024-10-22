// Start coding here

export function Button({type}) {
  return (
    <>
      {type === "primary" ? (
        <button
          style={{
            padding: "20px 50px",
            backgroundColor: "#074EE8",
            color: "white",
            margin: "10px"
          }}
        >
          Button
        </button>
      ) : (
        <button
          style={{
            padding: "20px 50px",
            backgroundColor: "#07A4E8",
            color: "white",
          }}
        >
          Button
        </button>
      )}
    </>
  );
}

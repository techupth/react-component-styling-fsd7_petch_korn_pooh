// Start coding here
export default function Alert ({ type, message }){
    function getStyle(type) {
      let style = {};
      if (type === "error") {
        style = {
          backgroundColor: "#f8d7da",
          color: "#721c24",
        };
      } else if (type === "warning") {
        style = {
          backgroundColor: "#fff3cd",
          color: "#856404",
        };
      } else if (type === "info") {
        style = {
          backgroundColor: "#d1ecf1",
          color: "#0c5460",
        };
      } else if (type === "success") {
        style = {
          backgroundColor: "#d4edda",
          color: "#155724",
        };
      }
      return style;
    };
  
    return (
      <div style={{ ...getStyle(type), padding: "10px", borderRadius: "5px"}}>
        <span>{message}</span>
      </div>
    );
  };
  



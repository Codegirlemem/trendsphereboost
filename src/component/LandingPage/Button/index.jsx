export default function CustomButton({ text, variant }) {
  let buttonStyle = {};

  if (variant === "black") {
    buttonStyle = {
      backgroundColor: "transparent",
      color: "black",
      padding: "10px 20px",
      border: "1px solid #002F5F",
      cursor: "pointer",
      borderRadius: "8px",
      textAlign: "center",
      width: "142px",
    };
  } else if (variant === "bordered") {
    buttonStyle = {
      backgroundColor: "#FF5733",
      color: "white",
      padding: "10px 20px",
      border: "1px solid white",
      cursor: "pointer",
      borderRadius: "8px",
      textAlign: "center",
      width: "142px",
    };
  }

  return <button style={buttonStyle}>{text}</button>;
}

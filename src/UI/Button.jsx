import button from "./Button.module.css";

// when using this component in the parent component pass the color and name props

// color="button background color"  gotten from figma
// name="button secondary classname" gotten from the css file

// all buttons have two classnames. first is the "btn classname which has already been fixed and passed to the component for the default general style and the second is the secondary classname eg "searchBtn", "btnWide" etc which is the additional unique style for the particular button"

export default function Button({ color, name }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`${button.btn} ${button[name]}`}
    >
      Send
    </button>
  );
}

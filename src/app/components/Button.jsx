import btnstyle from "../../styles/mainbutton.module.css";

export default function Button({ children, onClick, ...props }) {
  return (
    <button className={btnstyle.btn} onClick={onClick} {...props}>
      ENTER GALLERY{" "}
    </button>
  );
}

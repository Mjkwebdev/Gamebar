interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-"+ color}>
      {" "}
      {children}
    </button>
  );
};
export default Button;

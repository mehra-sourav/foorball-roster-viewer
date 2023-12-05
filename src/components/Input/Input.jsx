import { TextField } from "./Input.styles";
const Input = ({ children, ...rest }) => {
  return <TextField {...rest}>{children}</TextField>;
};

export default Input;

import AddIcon from "@mui/icons-material/Add";
import { Primary, Secondary, IconButton } from "./Button.styles";

export const PrimaryButton = ({
  label,
  height,
  width,
  color = "primary",
  sx,
  ...rest
}) => {
  return (
    <Primary
      variant="contained"
      color={color}
      sx={{ ...sx, height: height, width: width }}
      {...rest}
    >
      {label}
    </Primary>
  );
};

export const SecondaryButton = ({ label, height, width, color, ...rest }) => {
  return (
    <Secondary
      variant="outlined"
      color={color}
      sx={{ height: height, width: width }}
      {...rest}
    >
      {label}
    </Secondary>
  );
};

export const PrimaryIconButton = ({
  label,
  height = "40px",
  width = "40px",
  Icon = AddIcon,
  color = "primary",
  ...rest
}) => {
  return (
    <Primary
      variant="contained"
      color={color}
      sx={{ height: height, width: width }}
      {...rest}
    >
      <Icon>{label}</Icon>
    </Primary>
  );
};

export const SecondaryIconButton = ({
  label,
  height = "40px",
  width = "40px",
  Icon = AddIcon,
  color,
  ...rest
}) => {
  return (
    <Secondary
      variant="outlined"
      color={color}
      sx={{ height: height, width: width }}
      {...rest}
    >
      <Icon>{label}</Icon>
    </Secondary>
  );
};

export const SidepanelButton = ({
  height = "40px",
  width = "40px",
  color = "primary",
  active,
  Icon,
  ...rest
}) => {
  return (
    <IconButton
      disableRipple={true}
      variant="contained"
      color={color}
      className={active ? "active" : ""}
      sx={{ height: height, width: width }}
      {...rest}
    >
      <Icon />
    </IconButton>
  );
};

import { Button, IconButton as BaseIconButton, styled } from "@mui/material";

const BaseButton = styled(Button)(({ theme }) => ({
  height: "2.5rem",
  maxWidth: "7.5rem",
  textTransform: "none",
  borderRadius: "8px",
}));

export const Primary = styled(BaseButton)(({ theme }) => ({
  color: theme.palette.text.main,
  boxSizing: "border-box",

  "&:hover": {
    backgroundColor: theme.palette.primary.hover,
  },

  "&.Mui-disabled": {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.disabled,
  },
}));

export const Secondary = styled(BaseButton)(({ theme }) => ({
  backgroundColor: "transparent",
  borderColor: theme.palette.border.main,
  color: theme.palette.text.normal,

  "&:hover": {
    borderColor: theme.palette.border.main,
    color: theme.palette.text.main,
  },
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
  },
}));

export const IconButton = styled(BaseIconButton)(({ theme }) => ({
  color: theme.palette.primary.muted,

  "&.active": {
    color: theme.palette.primary.main,
  },
}));

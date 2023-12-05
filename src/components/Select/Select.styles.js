import { Select, styled } from "@mui/material";

export const BaseSelect = styled(Select)(({ theme, value }) => ({
  height: "2.5rem",
  borderRadius: "0.5rem",
  backgroundColor: "transparent",
  color: value !== "" ? theme.palette.text.main : theme.palette.text.muted,
  "&.MuiOutlinedInput-root  .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.border.main,
  },
  "& .MuiSelect-iconOutlined": {
    color: value !== "" ? theme.palette.text.main : theme.palette.text.muted,
  },
}));

import { OutlinedInput, styled } from "@mui/material";

export const TextField = styled(OutlinedInput)(({ theme }) => ({
  height: "2.5rem",
  borderRadius: "0.5rem",
  backgroundColor: "transparent",
  color: theme.palette.text.main,
  "&.MuiOutlinedInput-root": {
    "&:not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.border.main,
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.border.main,
    },
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.background.secondary,
    borderColor: theme.palette.border.main,
  },
}));

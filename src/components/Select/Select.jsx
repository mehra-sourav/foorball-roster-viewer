import { BaseSelect } from "./Select.styles";
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Select = ({ value, items, ...rest }) => {
  return (
    <BaseSelect
      displayEmpty
      IconComponent={KeyboardArrowDownIcon}
      value={value}
      {...rest}
    >
      <MenuItem disabled value="">
        Placeholder
      </MenuItem>
      {items.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </BaseSelect>
  );
};

export default Select;

import Input from "components/Input/Input";
import Select from "components/Select/Select";
import { useState } from "react";
const Roster = () => {
  let [personName, change] = useState("");
  const handleChange = (e) => change(e.target.value);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input placeholder="Placeholder" sx={{ mb: 1 }} />
      <Select
        value={personName}
        inputProps={{ "aria-label": "Without label" }}
        items={[0, 1, 2, "Place"]}
        onChange={handleChange}
      ></Select>
    </div>
  );
};

export default Roster;

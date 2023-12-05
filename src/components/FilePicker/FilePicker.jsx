import { useState, useRef, useEffect } from "react";
import { InputAdornment } from "@mui/material";
import { SecondaryButton } from "components/Button/Button";
import Input from "components/Input/Input";
import { HiddenInput } from "./FilePicker.styles";

const FilePicker = ({ acceptableFileFormat, ...rest }) => {
  const [fileName, setName] = useState("");
  const [error, setError] = useState(false);
  const inputFile = useRef();

  const handleFileUpload = () => {
    let uploadedFile = inputFile.current.files[0];
    if (uploadedFile?.type !== "text/csv") {
      setError(true);
    } else {
      setError(false);
    }
    setName(uploadedFile.name);
  };

  return (
    <Input
      readOnly
      sx={{ pr: 0 }}
      endAdornment={
        <InputAdornment position="end">
          <SecondaryButton component="label" {...(error && { color: "error" })}>
            Select File
            <HiddenInput
              ref={inputFile}
              onChange={handleFileUpload}
              type="file"
              accept={acceptableFileFormat}
              id="sourav"
            />
          </SecondaryButton>
        </InputAdornment>
      }
      placeholder="No File Selected"
      error={error}
      value={fileName}
      {...rest}
    />
  );
};

export default FilePicker;

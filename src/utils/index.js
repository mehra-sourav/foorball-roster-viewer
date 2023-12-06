import { csvParse } from "d3";

export const csvToArrayParser = (input) => {
  const records = csvParse(input);
  return records;
};

import { parse } from "@storybook/blocks";
import { csvParse } from "d3";

export const csvToArrayParser = (input) => {
  const records = csvParse(input, (row) => {
    const parsedRow = {};
    Object.entries(row).forEach(([key, value]) => {
      parsedRow[convertToCamelCase(key)] = value;
    });
    return parsedRow;
  });

  return records;
};

export const convertToCamelCase = (input) => {
  let newText = input?.trim();
  newText = newText?.split(" ");
  newText[0] = newText?.[0]?.charAt(0)?.toLowerCase() + newText?.[0]?.slice(1);
  newText = newText?.join("");
  return newText;
};

export const getSortedPlayers = (inputPlayers) => {
  let sortedPlayers = {
    goalkeeper: [],
    defender: [],
    midfielder: [],
    forward: [],
  };

  inputPlayers?.forEach(({ position, playerName, jerseyNumber }) => {
    sortedPlayers[position?.toLowerCase()]?.push({
      playerName,
      jerseyNumber,
    });
  });

  return sortedPlayers;
};

import { createContext, useReducer } from "react";
import { INITIAL_APP_STATE } from "constants";

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_PLAYER":
      return {
        ...state,
        selectedPlayer: action.payload,
      };
    case "SET_PLAYER_DATA":
      return {
        ...state,
        playerData: action.payload,
      };
    default:
      break;
  }
};

const AppContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, INITIAL_APP_STATE);

  const setPlayerData = (payload) => {
    dispatch({
      type: "SET_PLAYER_DATA",
      payload,
    });
  };
  const setSelectedPlayer = (payload) => {
    dispatch({ type: "SET_SELECTED_PLAYER", payload });
  };

  const value = {
    playerData: appState.playerData,
    selectedPlayer: appState.selectedPlayer,
    setPlayerData,
    setSelectedPlayer,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

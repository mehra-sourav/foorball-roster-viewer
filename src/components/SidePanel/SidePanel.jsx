import { SidePanelContainer, ButtonContainer } from "./SidePanel.styles";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { LogoImage } from "components/Image/Image";
import { SidepanelButton } from "components/Button/Button";

const SidePanel = ({ rosterSelected, changePage: changeToRosterPage }) => {
  return (
    <SidePanelContainer>
      {/* App Icon */}
      <LogoImage height="30px" width="30px" />

      <ButtonContainer>
        {/* Formation button */}
        <SidepanelButton
          color="primary"
          Icon={MenuRoundedIcon}
          active={!rosterSelected}
          onClick={() => changeToRosterPage(false)}
        ></SidepanelButton>

        {/* Roster button */}
        <SidepanelButton
          color="primary"
          Icon={Groups3RoundedIcon}
          active={rosterSelected}
          onClick={() => changeToRosterPage(true)}
        ></SidepanelButton>
      </ButtonContainer>
    </SidePanelContainer>
  );
};

export default SidePanel;

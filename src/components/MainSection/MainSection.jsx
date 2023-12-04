import Formation from "components/Formation/Formation";
import Roster from "components/Roster/Roster";
import { MainSectionContainer } from "./MainSection.styles";

const MainSection = ({ rosterSelected }) => {
  return (
    <MainSectionContainer>
      {rosterSelected ? <Roster /> : <Formation />}
    </MainSectionContainer>
  );
};

export default MainSection;

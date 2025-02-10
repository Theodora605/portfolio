import WKingImg from "../../assets/chess/white-king.png";
import BKingImg from "../../assets/chess/black-king.png";
import { Team } from "../../pages/ChessPage.tsx";

interface Props {
  onSelection(s: Team): void;
}

export const TeamSelection = ({ onSelection }: Props) => {
  return (
    <div className="grid w-[600px] h-[400px] grid-cols-2 border-dark-brown border-solid border-[8px] bg-amber-100 rounded-[200px]">
      <div className="flex items-center justify-center">
        <img src={WKingImg} onClick={() => onSelection("WHITE")} />
      </div>
      <div className="flex items-center justify-center">
        <img src={BKingImg} onClick={() => onSelection("BLACK")} />
      </div>
    </div>
  );
};

export default TeamSelection;

import WKnightImg from "../../assets/chess/white-knight.png";
import WBishopImg from "../../assets/chess/white-bishop.png";
import WRookImg from "../../assets/chess/white-rook.png";
import WQueenImg from "../../assets/chess/white-queen.png";

import BKnightImg from "../../assets/chess/black-knight.png";
import BBishopImg from "../../assets/chess/black-bishop.png";
import BRookImg from "../../assets/chess/black-rook.png";
import BQueenImg from "../../assets/chess/black-queen.png";

interface ChessPromotionModalProps {
  player: "WHITE" | "BLACK";
  onSelection: (selection: string) => void;
}

const ChessPromotionModal = ({
  player,
  onSelection,
}: ChessPromotionModalProps) => {
  return (
    <div className="min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-30">
      <div
        id="modal"
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] bg-opacity-100"
      >
        <div className="w-[500px] h-[200px] bg-amber-100 border-solid border-dark-brown border-[3px] rounded-2xl p-6">
          <div className="flex gap-3 justify-center translate-y-[20%]">
            <img
              className="w-[100px] h-auto cursor-pointer"
              src={player === "WHITE" ? WQueenImg : BQueenImg}
              onClick={() => onSelection("q")}
            />
            <img
              className="w-[100px] h-auto cursor-pointer"
              src={player === "WHITE" ? WKnightImg : BKnightImg}
              onClick={() => onSelection("n")}
            />
            <img
              className="w-[100px] h-auto cursor-pointer"
              src={player === "WHITE" ? WBishopImg : BBishopImg}
              onClick={() => onSelection("b")}
            />
            <img
              className="w-[100px] h-auto cursor-pointer"
              src={player === "WHITE" ? WRookImg : BRookImg}
              onClick={() => onSelection("r")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessPromotionModal;

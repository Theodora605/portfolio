import { StompSessionProvider, useStompClient } from "react-stomp-hooks";
import ChessBoard from "../components/chess/ChessBoard";
import TeamSelection from "../components/chess/TeamSelection";
import { useEffect, useState } from "react";
import HelpModal from "../components/HelpModal";

import WPawnImg from "../assets/chess/white-pawn.png";
import WKnightImg from "../assets/chess/white-knight.png";
import WBishopImg from "../assets/chess/white-bishop.png";
import WRookImg from "../assets/chess/white-rook.png";
import WQueenImg from "../assets/chess/white-queen.png";
import WKingImg from "../assets/chess/white-king.png";

import BPawnImg from "../assets/chess/black-pawn.png";
import BKnightImg from "../assets/chess/black-knight.png";
import BBishopImg from "../assets/chess/black-bishop.png";
import BRookImg from "../assets/chess/black-rook.png";
import BQueenImg from "../assets/chess/black-queen.png";
import BKingImg from "../assets/chess/black-king.png";

export type Team = null | "WHITE" | "BLACK";

const helpContents = (
  <div>
    <h2 className="text-[22px] font-bold text-center">Chess</h2>
    <p>
      This application allows two players to play chess against each other. To
      begin a match, one player clicks the white king to play as white while a
      player in another browser clicks the black king to play as black.
    </p>
    <p className="font-bold my-2">
      Note: The application does not currently have logic in place to detect
      stalemate / checkmate. For now, it is up to the players to figure out when
      the match is over. :^)
    </p>
    <p>
      When the game is finished or would like to start a new match, click the
      Reset button at under the chess board.
    </p>
    <p className="font-bold mt-3">
      What if I don't see any pieces on the board?
    </p>
    <p>
      This is a known bug. Try hitting the refresh button to see if that fixes
      the issue. If the application is still not showing the state, please send
      me an email at{" "}
      <a className="text-blue-500" href="mailto:theodore.goossens@gmail.com">
        theodore.goossens@gmail.com
      </a>
    </p>
    <p className="font-bold mt-3">Attributions</p>
    <a
      className="text-blue-500"
      href="https://greenchess.net/info.php?item=downloads"
    >
      Chess Piece icons created by GreenChess
    </a>
  </div>
);

function ChessPage() {
  useEffect(() => {
    const preloadImages = [
      WPawnImg,
      WKnightImg,
      WBishopImg,
      WRookImg,
      WQueenImg,
      WKingImg,
      BPawnImg,
      BKnightImg,
      BBishopImg,
      BRookImg,
      BQueenImg,
      BKingImg,
    ];
    for (const imgSrc of preloadImages) {
      let img = new Image();
      img.src = imgSrc;
    }
  });

  const [selection, setSelection] = useState<Team>(null);
  const [showHelp, setShowHelp] = useState(false);

  const handleSelection = (s: Team) => {
    setSelection(s);
  };

  return (
    <div>
      <div className="mt-5 ml-5">
        <a href="/">
          <div className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid border-[3px] cursor-pointer mr-10">
            <p className="flex justify-center text-dark-brown font-bold text-[32px] mx-5">
              Back
            </p>
          </div>
        </a>
        <div
          className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid  border-[3px] cursor-pointer"
          onClick={() => setShowHelp(true)}
        >
          <p className="flex justify-center text-dark-brown font-bold text-[32px] mx-5">
            Help
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] h-[600px] items-center justify-center">
        <StompSessionProvider url={"http://18.210.7.237:8080/websocket"}>
          {!selection && <TeamSelection onSelection={handleSelection} />}
          {selection && <ChessBoard player={selection} />}
          <SendingMessages />
        </StompSessionProvider>
      </div>

      <div className="flex flex-col w-[400px] p-3 bg-amber-100 border-dark-brown border-solid border-[5px] mt-3 mx-[40%] rounded-xl">
        <p>
          This application allows two players to play chess against each other.
          To begin a match, one player clicks the white king to play as white
          while a player in another browser clicks the black king to play as
          black.
        </p>
        <p className="font-bold">
          If play pieces are not displaying, try clicking the refresh button.
        </p>
      </div>

      {showHelp && (
        <HelpModal Content={helpContents} onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}

export function SendingMessages() {
  const stompClient = useStompClient();

  const requestReset = () => {
    if (stompClient) {
      stompClient.publish({
        headers: {
          "content-type": "application/json",
        },
        destination: "/app/chess",
        body: '{"request":"RESET","player":"WHITE"}',
      });
    } else {
      console.log("Failed to publish");
    }
  };

  const requestState = () => {
    if (stompClient) {
      stompClient.publish({
        headers: {
          "content-type": "application/json",
        },
        destination: "/app/chess",
        body: '{"request":"STATE","player":"WHITE"}',
      });
    } else {
      console.log("Failed to publish");
    }
  };
  return (
    <div className="flex gap-5">
      <div
        className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid border-[3px] cursor-pointer mt-10"
        onClick={requestState}
      >
        <p className="flex justify-center text-dark-brown font-bold text-[32px] mx-5">
          Refresh
        </p>
      </div>
      <div
        className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid border-[3px] cursor-pointer mt-10"
        onClick={requestReset}
      >
        <p className="flex justify-center text-dark-brown font-bold text-[32px] mx-5">
          Reset
        </p>
      </div>
    </div>
  );
}

export default ChessPage;

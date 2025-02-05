import { StompSessionProvider, useStompClient } from "react-stomp-hooks";
import ChessBoard from "../components/chess/ChessBoard";
import TeamSelection from "../components/chess/TeamSelection";
import { useEffect, useState } from "react";

export type Team = null | "WHITE" | "BLACK";

function ChessPage() {
  const [selection, setSelection] = useState<Team>(null);

  const handleSelection = (s: Team) => {
    setSelection(s);
  };

  return (
    <div className="flex flex-col gap-[10px] h-[600px] items-center justify-center">
      <StompSessionProvider url={"http://localhost:8080/websocket"}>
        {!selection && <TeamSelection onSelection={handleSelection} />}
        {selection && <ChessBoard player={selection} />}
        <SendingMessages />
      </StompSessionProvider>
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
  return (
    <div>
      <button onClick={requestReset}>Reset</button>
    </div>
  );
}

export default ChessPage;

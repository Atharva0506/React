import { useEffect, useState } from "react";
import Button from "./components/Button";
import { useSocket } from "./hooks/useSocket";
import { Cell, ChainReactionGame } from "./game/game";

function App() {
  const socket = useSocket();
  const [game, setGame] = useState(new ChainReactionGame(2, 8, 8)); // 2 players
  const [board, setBoard] = useState<Cell[][]>(game.createGrid());
  const [started, setStarted] = useState(false);
  const [invalidMove, setInvalidMove] = useState<string | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(0); // Track current player

  const INIT_GAME = "init_game";
  const MOVE = "move";
  const CURRENT_STATE = "game_state";
  const GAME_OVER = "game_over";
  const INVALID_MOVE = "invalid_move";

  // Emit events to the socket
  const emitMove = (row: number, col: number) => {
    socket.send(
      JSON.stringify({
        type: MOVE,
        payload: { row, col, player: currentPlayer },
      })
    );
  };

  const emitGameStart = () => {
    socket.send(JSON.stringify({ type: INIT_GAME }));
  };

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case INIT_GAME:
          setBoard(game.createGrid());
          setStarted(true);
          setInvalidMove(null);
          setCurrentPlayer(0); // Set first player
          break;
        case MOVE:
          const { row, col } = message.payload;
          if (game.placeAtom(row, col)) {
            setBoard([...game.grid]); // Update board
            setCurrentPlayer((prev) => (prev + 1) % 2); // Switch players
            setInvalidMove(null);
          } else {
            setInvalidMove("Invalid move! Try again.");
          }
          break;
        case GAME_OVER:
          alert(`Player ${message.payload.winner} wins!`);
          break;
        case INVALID_MOVE:
          setInvalidMove("Invalid move! Try again.");
          break;
        default:
          console.log("Unknown event type:", message.type);
      }
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket, game]);

  // Handle player move
  const handleCellClick = (row: number, col: number) => {
    if (game.isValidMove(row, col, currentPlayer)) {
      emitMove(row, col);
    } else {
      setInvalidMove("Invalid move! It's not your turn or wrong cell.");
    }
  };

  if (!socket) return <div>Connecting...</div>;

  return (
    <>
      <div>
        <Button onClick={emitGameStart}>Play Game</Button>
        {invalidMove && <p>{invalidMove}</p>}
        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="board-row">
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  className={`cell player-${cell.player}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {cell.atoms > 0 ? cell.atoms : ""}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

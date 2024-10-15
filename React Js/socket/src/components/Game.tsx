import { useEffect, useState } from "react";
import Button from "./Button";
import { useSocket } from "../hooks/useSocket";
import { Cell, ChainReactionGame } from "../game/game";
import Board from "./Board";

const Game = () => {
  const socket = useSocket();
  const [started, setStarted] = useState(false);
  const [chain, setChain] = useState(new ChainReactionGame(8, 8, 2));
  const [board, setBoard] = useState<Cell[][]>(chain.createGrid());

  const INIT_GAME = "init_game";
  const MOVE = "move";
  const GAME_OVER = "game_over";

  // Function to handle when a cell is clicked
  const handleCellClick = (row: number, col: number) => {
    if (!started) return; // Do nothing if the game hasn't started

    // Send move to server via WebSocket
    socket?.send(
      JSON.stringify({
        type: MOVE,
        payload: { row, col },
      })
    );
  };

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received message:", message); // Add logging to debug message flow

      switch (message.type) {
        case INIT_GAME:
          setBoard(chain.createGrid()); // Reset the board for a new game
          setStarted(true);
          break;
          case MOVE: {
            const data = message.payload;
            const { row, col } = data.move; 
            console.log("Data is: " + JSON.stringify(data));
            console.log(`Placing atom at row: ${row}, col: ${col}`);
            
            setBoard([...chain.grid]); 
            
            break;
        }
        
        case GAME_OVER:
          const { winner } = message.payload;
          console.log(`Game over! Winner: Player ${winner}`);
          setStarted(false);
          break;
        default:
          break;
      }
    };
  }, [socket, chain]);

  if (!socket) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl animate-pulse">
        Connecting...
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen gap-4 justify-between items-center">
      <div className="w-3/4 h-full flex justify-center items-center">
        <Board board={board} onCellClick={handleCellClick} /> {/* Pass click handler */}
      </div>
      <div className="w-1/4">
        {!started && (
          <Button onClick={() => socket.send(JSON.stringify({ type: INIT_GAME }))}>
            Play Game
          </Button>
        )}
      </div>
    </div>
  );
};

export default Game;

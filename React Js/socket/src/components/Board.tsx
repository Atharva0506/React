import React from "react";
import { Cell } from "../game/game";

interface BoardProps {
  board: Cell[][];
  onCellClick: (row: number, col: number) => void; // Add click handler prop
}

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div className="grid grid-cols-8 gap-1">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-8 h-8 border flex justify-center items-center cursor-pointer"
            onClick={() => onCellClick(rowIndex, colIndex)} // Handle cell click
          >
            {cell.atoms > 0 && (
              <span className={cell.player === 1 ? "text-red-500" : "text-blue-500"}>
                {cell.atoms}
              </span>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;

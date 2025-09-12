import { useState } from "react";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay, isDraw }) {
    
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return

        const nextSquares = squares.slice()

        if (xIsNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "O"
        }
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares)
    const winnerLine = winner ? winner.line : []

    let status;

    if (winner) {
        status = "Winner is " + winner.winner
    } else {
        status = "Next player is " + (xIsNext ? "X" : "O")
    }

    if(isDraw) status = "Draw"

    const size = 3



    return (
        <>
            {
                Array(size).fill(null).map((el, row) => {
                    return <div key={row} className="board-row">
                        {Array(size).fill(null).map((el, col) => {
                            const index = col + row * size
                            return <Square isWinning={winnerLine.includes(index)} key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
                        })}
                    </div>
                })

            }
            <div>
            {status}
            </div>
        </>


    )

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[b] === squares[a] && squares[a] === squares[c]) {
                return {winner: squares[a], line: lines[i]}
            }
        }
        return null
    }
}
import { useState } from "react";
import Board from "./Board";

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove]
    const xIsNext = currentMove % 2 === 0
    const [isAscending, setIsAscending] = useState(true)
    let isDraw = false

    function handleClick(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    let moves = history.map((square, move) => {

        let condition;

        if (move > 0) {
            condition = "Go to move #" + move
        } else {
            condition = "Go to game start"
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{condition}</button>
            </li>
        )
    })

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    function sortHistory() {
        setIsAscending(!isAscending)
    }


    if (!isAscending) {
        moves = moves.slice().reverse()
    }



    if (history.length === 10) {
        isDraw = true
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handleClick} isDraw={isDraw}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
            <div>
                <button onClick={sortHistory}>{isAscending ? "Sort by ascending" : "Sort by descending"}</button>
            </div>
        </div>
    )
}
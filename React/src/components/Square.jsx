import { useState } from "react";

export default function Square({value, onSquareClick, isWinning}) {
    return (
        <button className={`square ${isWinning ? "active" : ""}`} onClick={onSquareClick}>{value}</button>
    )
}
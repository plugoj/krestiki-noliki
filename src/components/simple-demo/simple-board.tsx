import { useCallback, useState } from "react";
import { Game } from "../../game-logick/Game";
import TicTacToe from "./tic-tak-toe";

const SimpleBoard = () => {    
    const [theGame, setGame] = useState<Game>(new Game())
    const [board, setBoard] = useState<number[][]>(theGame.getField())
    const handleClick = useCallback(
        click(theGame, setBoard)
        , [theGame, click, setBoard]
    )

    return (
        <div className="min-w-screen min-h-screen bg-slate-950 flex justify-center items-center">
            <div className="grid grid-cols-3 grid-rows-3">
                {
                    board.map((TTTTales, index) => <TicTacToe key={`ttt-${index}`} click={handleClick(index)} tiles={TTTTales}/>)
                }
            </div>
        </div>
    )
}

export default SimpleBoard;

const click = 
(
    game: Game, 
    setBoard: React.Dispatch<React.SetStateAction<number[][]>>
) => 
(
    ticTacToeIndex: number
) => 
(
    tileIndex: number
) => 
() => {
    setBoard(
        [...game.onClick(ticTacToeIndex, tileIndex).getField()]
    )
}

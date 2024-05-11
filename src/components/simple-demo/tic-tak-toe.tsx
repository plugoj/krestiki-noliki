import { FC } from "react";
import Tile from "./tile";

const TicTacToe:FC<{click: (t: number) => () => void, tiles: number[]}> = ({click, tiles}) => {    
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
            {
                tiles.map( (tile, index) => <Tile key={`t-${index}`} click={click(index)} tile={tile}/> )
            }
        </div>
    )
}

export default TicTacToe;
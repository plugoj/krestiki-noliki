import { FC } from "react";

const Tile:FC<{click: () => void, tile: number}> = ({click, tile}) => {
    const [style, display] = getVisual(tile);
    return (
        <div 
            className={`
                w-12 h-12 flex justify-center items-center rounded 
                bg-slate-700 text-black ${style}-disabled 
                select-none hover:font-bold hover:scale-105
            `}
            onClick={click}
        >
            {/* {display} */}
            {tile}
        </div>
    )
}

export default Tile;

const getVisual = (tile: number): [string, string] => {
    switch (tile) {
        case 1:
            return ["text-red-600", "X"]
        case 2:
            return ["text-blue-600", "O"]
        default:
            return ["", `${tile}`]
    }
}
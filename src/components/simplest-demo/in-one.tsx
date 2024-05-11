import { useState } from "react"
import { Game } from "../../game-logick/Game"

const InOne = () => {
    
    const [theGame, setGame] = useState<Game>(new Game())
    const [counter, setCounter] = useState(0)

    return (
        <div className="min-w-screen min-h-screen bg-slate-950 flex justify-center items-center">
            <div className="grid grid-cols-3 grid-rows-3">
                <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][0])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 0);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][0])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][1])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 1);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][1])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][2])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 2);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][2])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][3])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 3);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][3])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][4])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 4);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][4])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][5])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 5);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][5])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][6])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 6);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][6])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][7])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 7);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][7])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[5][8])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(5, 8);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[5][8])}
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][0])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 0);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][0])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][1])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 1);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][1])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][2])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 2);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][2])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][3])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 3);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][3])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][4])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 4);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][4])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][5])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 5);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][5])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][6])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 6);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][6])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][7])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 7);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][7])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[4][8])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(4, 8);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[4][8])}
                    </div>
                </div>
                
                <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][0])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 0);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][0])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][1])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 1);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][1])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][2])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 2);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][2])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][3])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 3);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][3])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][4])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 4);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][4])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][5])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 5);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][5])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][6])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 6);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][6])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][7])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 7);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][7])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[3][8])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(3, 8);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[3][8])}
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][0])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 0);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][0])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][1])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 1);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][1])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][2])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 2);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][2])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][3])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 3);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][3])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][4])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 4);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][4])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][5])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 5);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][5])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][6])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 6);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][6])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][7])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 7);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][7])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[2][8])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(2, 8);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[2][8])}
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][0])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 0);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][0])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][1])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 1);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][1])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][2])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 2);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][2])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][3])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 3);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][3])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][4])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 4);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][4])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][5])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 5);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][5])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][6])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 6);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][6])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][7])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 7);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][7])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[1][8])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(1, 8);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[1][8])}
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 gap-1 border p-2 border-slate-400">
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][0])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 0);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][0])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][1])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 1);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][1])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][2])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 2);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][2])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][3])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 3);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][3])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][4])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 4);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][4])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][5])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 5);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][5])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][6])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 6);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][6])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][7])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 7);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][7])}
                    </div>
                    <div 
                        className={`
                            w-12 h-12 flex justify-center items-center rounded 
                            bg-slate-700 text-black ${getStyle(theGame.field[0][8])} 
                            select-none hover:font-bold hover:scale-105
                        `}
                        onClick={() => {
                            theGame.onClick(0, 8);
                            setCounter( counter + 1 );
                        }}
                    >
                        {getToDisplay(theGame.field[0][8])}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InOne;

const getStyle = (tile: number): string => {
    switch (tile) {
        case 1:
            return "text-red-600"
        case 2:
            return "text-blue-600"
        default:
            return ""
    }
}
const getToDisplay = (tile: number): string => {
    switch (tile) {
        case 1:
            return "X"
        case 2:
            return "O"
        default:
            return `${tile}`
    }
}
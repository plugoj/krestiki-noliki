import { array } from "../utils/array";

export class Game {
    
    field: number[][];

    constructor () {
        this.field = array(9, () => array(9, 0));
    }

    onClick(x: number, y: number): number[][] {
        this.field[x][y] += 1;
        return this.field;
    }
}
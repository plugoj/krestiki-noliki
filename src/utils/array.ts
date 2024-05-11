export function array<T>(lenght: number, fillBy?: T | ((index:number) => T)): T[] {
    return fillBy
        ? array(lenght).map((_, index) => isSingleValue(fillBy) ? fillBy : fillBy(index))
        : [... new Array(lenght)]
} 

function isSingleValue<T>(fillBy?: T | ((index:number) => T)): fillBy is T {
    return typeof fillBy === "function" 
        ? false
        : true
}
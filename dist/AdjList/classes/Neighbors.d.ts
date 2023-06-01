export declare class Neighbors {
    head: LinkedList;
    constructor();
    toString(): string;
    push(name: string, weigth?: number): void;
    pop(): void;
    removeFromName(vertex_name: string): LinkedList;
}
declare class LinkedList {
    vertex_name: string | null;
    next: LinkedList | null;
    value: {
        [property: string]: any;
    };
    toString: () => string;
}
export {};

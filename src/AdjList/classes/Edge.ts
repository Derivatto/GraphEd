export class Edge {
    start: string;
    end: string;
    weigth?: number;
    capacity?: number;

    constructor(start: string, end: string, weigth?: number , capacity?: number) {
        this.start = start;
        this.end = end;
        if (weigth) this.weigth = weigth;
        if (capacity) this.capacity = capacity;
    }
}
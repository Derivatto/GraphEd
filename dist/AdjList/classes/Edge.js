"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edge = void 0;
class Edge {
    constructor(start, end, weigth, capacity) {
        this.start = start;
        this.end = end;
        if (weigth)
            this.weigth = weigth;
        if (capacity)
            this.capacity = capacity;
    }
}
exports.Edge = Edge;

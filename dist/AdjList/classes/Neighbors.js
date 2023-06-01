"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neighbors = void 0;
class Neighbors {
    constructor() {
        this.head = new LinkedList();
    }
    toString() {
        return `[ ${this.head.toString()} ]`;
    }
    push(name, weigth) {
        if (this.head.vertex_name == null) {
            this.head.vertex_name = name;
            if (!weigth)
                this.head.value['weigth'] = weigth;
            return;
        }
        let head = this.head;
        while (head.next != null)
            head = head.next;
        head.vertex_name = name;
        if (!weigth)
            head.value['weigth'] = weigth;
    }
    pop() {
        if (this.head.vertex_name == null)
            throw new Error('Removing from empty list');
        if (this.head.next == null) {
            this.head.vertex_name = null;
            this.head.value = {};
            return;
        }
        let head = this.head;
        let actual = this.head;
        while (head.next != null) {
            actual = head;
            head = head.next;
        }
        actual.next = null;
    }
    removeFromName(vertex_name) {
        if (this.head.vertex_name == null)
            throw new Error('Removing from empty list');
        let head = this.head;
        let actual = this.head;
        while (head.vertex_name != vertex_name && head.next != null) {
            actual = head;
            head = head.next;
        }
        if (head.next == null && head.vertex_name != vertex_name)
            throw new Error(`Non-exist element ${vertex_name} in the list`);
        let removed = head;
        actual.next = head.next;
        return removed;
    }
}
exports.Neighbors = Neighbors;
class LinkedList {
    constructor() {
        this.vertex_name = null;
        this.next = null;
        this.value = {};
        this.toString = () => {
            var _a, _b;
            if (this.vertex_name == null)
                return "";
            return `(${this.vertex_name}, ${JSON.stringify(this.value)}) -> ${(_b = (_a = this.next) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : 'FIM'}`;
        };
    }
}

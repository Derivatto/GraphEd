export class Neighbors {
    head: LinkedList;

    constructor(){
        this.head = new LinkedList()
    }

    toString() {
        return `[ ${ this.head.toString() } ]`
    }

    push(name: string, weigth?: number) {
        if (this.head.vertex_name == null) {
            this.head.vertex_name = name;
            if (!weigth) this.head.value['weigth'] = weigth;
            return;
        }
        let head = this.head
        while(head.next != null) head = head.next;
        head.vertex_name = name
        if (!weigth) head.value['weigth'] = weigth;
    }

    pop() {
        if (this.head.vertex_name == null) throw new Error('Removing from empty list');
        if (this.head.next == null) {
            this.head.vertex_name = null;
            this.head.value = {};
            return;
        }
        let head = this.head;
        let actual = this.head;

        while (head.next != null) {
            actual = head 
            head = head.next
        }
        actual.next = null;
    }

    removeFromName(vertex_name: string) {
        if (this.head.vertex_name == null) throw new Error('Removing from empty list');
        let head = this.head
        let actual = this.head;
        while (head.vertex_name != vertex_name && head.next != null) {
            actual = head;
            head = head.next;
        }
        if (head.next == null && head.vertex_name != vertex_name) throw new Error(`Non-exist element ${vertex_name} in the list`);
        let removed = head;
        actual.next = head.next;
        return removed
    }
}

class LinkedList {
    vertex_name: string | null = null;
    next: LinkedList | null = null;
    value: {[property: string] : any} = {};

    toString: () => string = () => {
        if (this.vertex_name == null) return ""
        return `(${this.vertex_name}, ${JSON.stringify(this.value)}) -> ${this.next?.toString() ?? 'FIM'}`
    }

}
export class Node<T> {
    height: number;

    constructor(
        readonly value: T,
        readonly left?: Node<T>,
        readonly  right?: Node<T>,
    ) {
        this.height = height(this);
    }

    insert(value) {
        return insertBst(value, this);
    }
}

export function insertBst<T>(value: T, node?: Node<T>) {
    if (!node) {
        return new Node(value);
    }

    if (value < node.value) {
        return new Node(node.value, insertBst(value, node.left), node.right);
    }
    if (value > node.value) {
        return new Node(node.value, node.left, insertBst(value, node.right));
    }
    return node;
}

export function height<T>(node: Node<T>): number {
    if (!node) {
        return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
}


export function getTreeSaturation<T>(node: Node<T>) {
    const children = countNodeChildren(node) - 1;

    return children / 2 **  (height(node));
}

export function countNodeChildren<T>(node: Node<T>) {
    if (!node) {
        return 0;
    }

    return 1 + (countNodeChildren(node.left) + countNodeChildren(node.right));
}

export function treeFromArray(array: Array<number>) {
    // const root = new Node(array.unshift());
    let root = new Node(array[0]);
    for (let i = 1; i < array.length; i++) {
        root = root.insert(array[i]);
    }
    return root;
    // return array.reduce((result, value) => {
    //     return result.insert(value);
    // }, root);
}



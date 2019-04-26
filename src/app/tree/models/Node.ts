export interface Tree {
    // root: RootNode;
    // unclassified: Node;
    nodes: Node[];
}

//
// export interface RootNode extends Node {
// 	parent?: Node;
// 	children?: Node[];
// }

export interface Node {
    segnodeid: number;
    value: any;
    parentId?: number;
    children?: Node[];
}

export function searchTree(element: Node, idToFind: number): Node {
    if (element.segnodeid === idToFind) {
        return element;
    } else if (element.children && element.children.length !== 0) {
        let result = null;
        for (let i = 0; result === null && i < element.children.length; i++) {
            result = searchTree(element.children[i], idToFind);
        }
        return result;
    }
    return null;
}


new Node()

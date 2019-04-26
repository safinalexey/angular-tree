import { getTreeSaturation, height, insertBst, Node, treeFromArray } from './tree';

describe('TreeService', () => {
    it('should be created', () => {

    });

    describe('instertBst', () => {
        it('Creates a node', () => {
            const result = insertBst(5);
            expect(result).toEqual(new Node(5));
        });

        it('inserst into existin node to the left if smaller', () => {
            const root = new Node(6);
            const result = insertBst(5, root);
            expect(result).toEqual(new Node(6, new Node(5)));
        });

        it('inserst into existin node to the right if bigger', () => {
            const root = new Node(6);
            const result = insertBst(7, root);
            expect(result).toEqual(new Node(6, undefined, new Node(7)));
        });

        it('insert into existing tree to the left if smaller', () => {
            const tree = new Node(6, new Node(5), new Node(7));
            const result = insertBst(4, tree);
            expect(result).toEqual(new Node(6, new Node(5, new Node(4)), new Node(7)));
        });
    });

    describe('height', () => {
        it('calculates height of left inmbalanced tree', () => {
            const expected = 3;
            const input = new Node(5, new Node(4, new Node(3)));
            const result = height(input);
            expect(result).toEqual(expected);
        });

        it('calculates height of mixed tree', () => {
            const expected = 3;
            const input = new Node(6, new Node(4, undefined, new Node(5)));
            const result = height(input);
            expect(result).toEqual(expected);
        });
    });

    describe('treeFromArray', () => {
        it('one item', () => {
            const result = treeFromArray([10]);
            expect(result).toEqual(new Node(10));
        });
        it('two items', () => {
            const result = treeFromArray([10, 4]);
            expect(result).toEqual(new Node(10, new Node(4)));
        });
    });


    describe('saturation', () => {
        it('calculates saturation of a tree', () => {
            const expected = 4 / 8;
            const input = treeFromArray([100, 50, 150, 25, 75]);
            const result = getTreeSaturation(input);
            expect(result).toEqual(expected);
        });

        it('calculates saturation of a with one node', () => {
            const expected = 0;
            const input = treeFromArray([100]);
            const result = getTreeSaturation(input);
            expect(result).toEqual(expected);
        });
    });


});

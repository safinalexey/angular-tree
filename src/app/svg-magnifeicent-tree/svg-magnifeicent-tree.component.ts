import { Component, Input } from '@angular/core';
import { getTreeSaturation, Node } from '../data-structures/tree';

@Component({
    selector: '[app-svg-magnifeicent-tree]',
    templateUrl: './svg-magnifeicent-tree.component.html',
    styleUrls: ['./svg-magnifeicent-tree.component.styl']
})
export class SvgMagnifeicentTreeComponent {
    nodeSize = 20;
    spacingLeft = 0;
    spacingRight = 0;
    private spacing: number;

    private _tree: Node<number>;

    get tree() {
        return this._tree;
    }

    @Input() set tree(tree: Node<number>) {
        this._tree = tree;
        this.spacing = (this.nodeSize / 2 / 1.5) * (2 ** tree.height);
        this.spacingLeft = (this.tree.left ? getTreeSaturation(this.tree.left) : 0.1) * -this.spacing;
        this.spacingRight = (this.tree.right ? getTreeSaturation(this.tree.right) : 0.1) * this.spacing;

    }

}

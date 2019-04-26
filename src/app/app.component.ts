import { Component } from '@angular/core';
import { insertBst, Node, treeFromArray } from './data-structures/tree';

console.log(treeFromArray([100, 50, 150, 25, 75]))
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    tree =  treeFromArray([100, 50, 150, 25, 75]);

    addNode() {
        this.tree = insertBst(Math.round(Math.random() * 1000), this.tree);
    }
}


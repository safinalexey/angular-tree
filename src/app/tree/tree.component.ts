import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  templateUrl: 'tree.component.html',
  selector: 'app-tree',
  styleUrls: ['./tree.component.styl']
})
export class TreeComponent {
  @Input() tree: Node;
}

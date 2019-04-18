import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    title = 'angular-tree';

    tree = {
        id: 0,
        value: '0',
        children: [
            {id: 1, value: 1, children: [{id: 3, value: 3}, {id: 4, value: 4}]},
            {id: 2, value: 2, children: [{id: 5, value: 5}, {id: 6, value: 6}]}
        ]
    };
}

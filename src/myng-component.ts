import {Component} from "@angular/core";

@Component({
    template: `
           <h1>MyNgComp</h1>
           `,
    selector: 'MyNgComp',
})


export class MyNgComp {
    constructor() {
        console.log('>>>>> myng-component v86');
        console.log('Hello from MyNgComp')
    }

    ngOnInit() {
    }

}
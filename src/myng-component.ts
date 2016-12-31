import {Component} from "@angular/core";

@Component({
    template: `
           <h2>MyNgComp v2</h2>
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
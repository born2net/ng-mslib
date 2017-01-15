import {Component} from "@angular/core";

@Component({
    template: `
           <h4>MyNgComp v9</h4>
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
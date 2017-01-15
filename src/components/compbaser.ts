import {Subscriber} from "rxjs";
import {Component} from "@angular/core";
// import {
//     Subscriber,
//     Subject,
//     Observable
// } from "rxjs";
// type UnSubscriber = Function | Subscriber<any>;
// var c:UnSubscriber = Observable.create((a)=>{}).subscribe(()=>{});


export class Compbaser {
    private unsubFunctions: Array<any> = [];
    protected me = '';

    constructor() {
        this.me = this.getCompSelector(this.constructor);
        this.me = 'todo fix'
    }

    protected getCompSelector(i_constructor) {
        if (window.location.href.indexOf('localhost') == -1)
            return;
        var annotations = Reflect.getMetadata('annotations', i_constructor);
        var componentMetadata = annotations.find(annotation => {
            return (annotation instanceof Component);
        });
        return componentMetadata.selector;
    }

    protected cancelOnDestroy(i_function: any): void {
        this.unsubFunctions.push(i_function);
    }

    private ngOnDestroy() {
        // console.log('unsubscribing on behalf of ' + this.me);
        this.unsubFunctions.map((f: any) => {
            if (f instanceof Subscriber) {
                f.unsubscribe();
            } else {
                f()
            }
        });
        this.destroy();
        this.unsubFunctions = null;
        this.me = null;
    }

    // override by sub class component
    destroy() {
    };
}
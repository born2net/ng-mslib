import {NgModule, ModuleWithProviders} from "@angular/core";
import {MyNgComp} from "./myng-component";
import {StringJSPipe} from "./pipes/stringjs.pipe";
import {CommonModule} from "@angular/common";
import {Ngmslib} from "./ng-mslib";

// if you were ever to add a provided Service feature, it needs to have it's own module,
// since it requires a single import only from within  app.module, contrary to
// feature modules which get imported multiple times by other modules

export const MSLIB_DIRECTIVES: Array<any> = [MyNgComp, StringJSPipe];

@NgModule({
    imports: [CommonModule],
    declarations: MSLIB_DIRECTIVES,
    exports: MSLIB_DIRECTIVES
})

export class MsLibModule {
    static forRoot(): ModuleWithProviders {
        Ngmslib.GlobalizeStringJS();
        return {
            ngModule: MsLibModule,
            providers: []
        };
    }
}
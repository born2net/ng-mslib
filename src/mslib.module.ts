import {
    NgModule,
    ModuleWithProviders
} from "@angular/core";
import {
} from "@angular/forms";
import {MyNgComp} from "./myng-component";
import {StringJSPipe} from "./pipes/stringjs.pipe";

export const MSLIB_DIRECTIVES: Array<any> = [MyNgComp, StringJSPipe];

@NgModule({
    imports: [],
    declarations: MSLIB_DIRECTIVES,
    exports: MSLIB_DIRECTIVES
})

export class MsLibModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MsLibModule,
            providers: []
        };
    }
}
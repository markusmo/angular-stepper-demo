import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {UserCreateFormComponent} from './forms/user-create-form/user-create-form.component';
import {UserAddDataFormComponent} from './forms/user-add-data-form/user-add-data-form.component';
import {PortalModule} from "@angular/cdk/portal";
import {StepperComponent} from './stepping/stepper/stepper.component';
import {CdkStepperModule} from "@angular/cdk/stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PortalModule,
        CdkStepperModule],
    declarations: [
        AppComponent,
        UserCreateFormComponent,
        UserAddDataFormComponent,
        StepperComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

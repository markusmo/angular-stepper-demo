import {AfterContentInit, Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {CdkStepper, STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {animate, AnimationEvent, state, style, transition, trigger} from "@angular/animations";
import {distinctUntilChanged, map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    providers: [{provide: CdkStepper, useExisting: StepperComponent}, {
        provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }],
    animations: [trigger('stepTransition', [
        state('previous', style({transform: 'translateX(-100%)', opacity: 0})),
        state('current', style({transform: 'translateX(0)', opacity: 1})),
        state('next', style({transform: 'translateX(100%)', opacity: 0})),
        transition(':enter', animate(0)),
        transition('previous => current', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
        transition('next => current', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
    ])]
})
export class StepperComponent extends CdkStepper implements OnInit, AfterContentInit {


    @Output()
    animationDone: EventEmitter<void> = new EventEmitter<void>();

    stepsToGo = 1;
    animations = new Subject<AnimationEvent>();

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
        if (event.key === 'ArrowLeft') {
            this.previous();
        } else if (event.key === 'ArrowRight') {
            this.next();
        }
    }

    ngOnInit(): void {
        this.selectionChange.pipe(
            map(selectionEvent => this.stepsToGo = selectionEvent.selectedIndex + 1),
            takeUntil(this._destroyed)
        ).subscribe(() => this._stateChanged());
    }

    ngAfterContentInit() {
        super.ngAfterContentInit();
        this.animations.pipe(
            distinctUntilChanged((step1, step2) =>
                step1.fromState === step2.fromState && step1.toState === step2.toState),
            takeUntil(this._destroyed)
        ).subscribe( event => this.animationDone.emit());
    }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('app component test suite (inline element)', ()=> {
	let comp: AppComponent;
	let fixure: ComponentFixture<AppComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	
	// async beforeEach creation component 
	beforeEach(async() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent]
		}).compileComponents();
	});

	// sync beforeEach creation of component
	beforeEach(() => {
		fixure = TestBed.createComponent(AppComponent);
		comp = fixure.componentInstance;
		de = fixure.debugElement.query(By.css('h3'));
		el = de.nativeElement;
	});

	it('no content is calls before detectChanges done.', () => {
		fixure.detectChanges();
		expect(el.textContent).toContain(comp.title);
	});

	it('should displys different component title once detectChanges done.', () => {
		comp.title = 'app title changes';
		fixure.detectChanges();
		expect(el.textContent).toContain(comp.title);
	});

});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleExtentionfolderComponent } from './style-extentionfolder.component';

describe('StyleExtentionfolderComponent', () => {
  let component: StyleExtentionfolderComponent;
  let fixture: ComponentFixture<StyleExtentionfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleExtentionfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleExtentionfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

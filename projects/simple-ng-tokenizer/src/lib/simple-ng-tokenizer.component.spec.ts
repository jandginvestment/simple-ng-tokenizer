import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgTokenizerComponent } from './simple-ng-tokenizer.component';

describe('SimpleNgTokenizerComponent', () => {
  let component: SimpleNgTokenizerComponent;
  let fixture: ComponentFixture<SimpleNgTokenizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNgTokenizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgTokenizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

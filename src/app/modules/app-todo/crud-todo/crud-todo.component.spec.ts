import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTodoComponent } from './crud-todo.component';

describe('CrudTodoComponent', () => {
  let component: CrudTodoComponent;
  let fixture: ComponentFixture<CrudTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

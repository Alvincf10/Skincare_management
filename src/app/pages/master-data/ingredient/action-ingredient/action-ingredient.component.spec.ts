import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionIngredientComponent } from './action-ingredient.component';

describe('ActionIngredientComponent', () => {
  let component: ActionIngredientComponent;
  let fixture: ComponentFixture<ActionIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

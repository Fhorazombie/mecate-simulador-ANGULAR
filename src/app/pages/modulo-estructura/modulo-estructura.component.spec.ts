import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEstructuraComponent } from './modulo-estructura.component';

describe('ModuloEstructuraComponent', () => {
  let component: ModuloEstructuraComponent;
  let fixture: ComponentFixture<ModuloEstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloEstructuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

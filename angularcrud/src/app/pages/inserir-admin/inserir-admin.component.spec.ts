import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAdminComponent } from './inserir-admin.component';

describe('InserirAdminComponent', () => {
  let component: InserirAdminComponent;
  let fixture: ComponentFixture<InserirAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserirAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

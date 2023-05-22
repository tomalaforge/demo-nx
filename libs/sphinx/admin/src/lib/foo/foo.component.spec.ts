import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@demo/shared';
import { FooComponent } from './foo.component';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FooComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

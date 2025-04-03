import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeroiconsComponent } from './ngx-heroicons.component';

describe('NgxHeroiconsComponent', () => {
  let component: NgxHeroiconsComponent;
  let fixture: ComponentFixture<NgxHeroiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHeroiconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxHeroiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

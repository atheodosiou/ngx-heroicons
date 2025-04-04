import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxHeroiconsComponent } from './ngx-heroicons.component';

describe('NgxHeroiconsComponent', () => {
  let fixture: ComponentFixture<NgxHeroiconsComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHeroiconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxHeroiconsComponent);
    host = fixture.nativeElement;
  });

  it('should create the component', () => {
    fixture.componentRef.setInput('icon', 'academic-cap');
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render an SVG element into the host', () => {
    fixture.componentRef.setInput('icon', 'academic-cap');
    fixture.detectChanges();

    const svg = host.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.tagName.toLowerCase()).toBe('svg');
  });

  it('should apply the host class to the <svg>', () => {
    // Set a class on the host
    host.classList.add('w-6', 'h-6', 'text-red-500');

    fixture.componentRef.setInput('icon', 'academic-cap');
    fixture.detectChanges();

    const svg = host.querySelector('svg');
    expect(svg?.getAttribute('class')).toContain('w-6');
    expect(svg?.getAttribute('class')).toContain('text-red-500');
  });

  it('should set aria-hidden="true" on the <svg>', () => {
    fixture.componentRef.setInput('icon', 'academic-cap');
    fixture.detectChanges();

    const svg = host.querySelector('svg');
    expect(svg?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should handle missing icons gracefully', () => {
    fixture.componentRef.setInput('icon', 'non-existent-icon' as any);
    fixture.detectChanges();

    const svg = host.querySelector('svg');
    expect(svg).toBeNull();
    expect(host.innerHTML.trim()).toBe('');
  });
});

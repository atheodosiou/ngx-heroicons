import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, effect, inject, input } from '@angular/core';
import { ICONS } from '../icons';
import { IconName } from '../types';

@Component({
  selector: 'ngx-hero-icon',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxHeroiconsComponent {
  name = input.required<IconName>();
  style = input<'outline' | 'solid'>('outline');

  private readonly elRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      const name = this.name();
      const style = this.style();

      const svgRaw = ICONS[style]?.[name];
      if (!svgRaw) return;

      const svg = new DOMParser().parseFromString(svgRaw, 'image/svg+xml').documentElement;

      // Accessibility
      svg.setAttribute('aria-hidden', 'true');

      // ✅ Forward class to SVG
      const host = this.elRef.nativeElement;
      const hostClass = host.className;
      svg.setAttribute('class', hostClass);

      host.innerHTML = '';
      host.appendChild(svg);
    });
  }
}

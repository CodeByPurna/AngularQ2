```typescript
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
@Directive({
 selector: '[highlightNumber]'
})
export class HighlightNumberDirective implements OnInit {
 constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
 ngOnInit(): void {
 const words = this.elementRef.nativeElement.innerText.split(' ');
 for (const word of words) {
    if (/^\d+$/.test(word)) {
        const span = this.renderer.createElement('span');
        this.renderer.setStyle(span, 'background-color', 'yellow');
        this.renderer.appendChild(span, this.renderer.createText(`${word} `));
        this.renderer.insertBefore(this.elementRef.nativeElement, span, this.elementRef.nativeElement);
        } else {
        this.renderer.appendChild(this.elementRef.nativeElement, this.renderer.createText(`${word} `));
        }
        }
        this.renderer.removeChild(this.elementRef.nativeElement, this.elementRef.nativeElement.firstChild);
        }
       }
       ```
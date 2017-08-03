import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
  	element.nativeElement.style.color = "blue";
  }

  @HostListener('click') doSomething() {
  	alert('it works!');
  }

}

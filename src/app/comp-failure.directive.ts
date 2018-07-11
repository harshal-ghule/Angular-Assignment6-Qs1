import { Directive, Input } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {
   
 @Input('appCompFailure') Failurecolor: string;
    constructor(private eleobj:ElementRef)
   { 
     
   }

   @HostListener('mouseenter') onMouseEnter()
  {
    this.setcolor(this.Failurecolor);
    
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.setcolor('font-style: bold; color: black');
  }

  setcolor(color:string)
  {
    this.eleobj.nativeElement.style.cssText=color;
  }

}

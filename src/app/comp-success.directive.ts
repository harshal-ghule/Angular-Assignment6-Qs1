import { Directive, Input } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  @Input('appCompSuccess') Successcolor : string;


  constructor(private eleobj:ElementRef)
   { 
   
   }

   @HostListener('mouseenter') onMouseEnter()
  {
    this.setcolor(this.Successcolor);
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

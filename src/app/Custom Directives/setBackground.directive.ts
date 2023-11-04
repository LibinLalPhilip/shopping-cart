import { Directive, ElementRef, Renderer2 } from "@angular/core";



@Directive({
  selector:'[setBackground]'
})
export class setBackground{
  constructor(private element:ElementRef, private renderer:Renderer2){
    // element.nativeElement.style.backgroundColor='grey';
    
  }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor', 'red')
  }
}
// import { Directive, HostBinding, HostListener,Input,ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appZoom]'
// })
// export class ZoomDirective {

// @Input() hoverColor : string ;
// // @HostBinding('class.z')  private zoomit: true;
// constructor(private el: ElementRef) {
 
// //el.nativeElement.style.backgroundColor='green';
// }
// @HostListener('mouseenter') onmouseenter(){
//   //console.log('ss');
//   this.onMouseOverC("red");
// }

// @HostListener('mouseout') onmouseleave(){
//   this.onMouseOverC("Yellow");
// }


// public onMouseOverC(color:any){
//   this.el.nativeElement.style.backgroundColor=color;
// } 
// }


import { Directive, HostBinding, HostListener,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  tmpcolor;
@Input() set appZoom(colorToset){
console.log(colorToset)
this.tmpcolor=colorToset;
}
 @HostBinding('style.background-color') backgroundColor = 'yellow';
constructor(private el: ElementRef) {
 
//el.nativeElement.style.backgroundColor='green';
}
@HostListener('mouseenter') onmouseenter(){
  console.log("color");
  this.backgroundColor = this.tmpcolor;
}

@HostListener('mouseout') onmouseleave(){
  this.backgroundColor = "cyan";
}

}

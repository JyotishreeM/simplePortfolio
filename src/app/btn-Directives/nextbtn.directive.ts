import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appNextbtn]'
})
export class NextbtnDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
nextFunc(){
  var elm = this.el.nativeElement.parentElement.parentElement.children[0];
  var item = elm.getElementsByClassName("item")
  elm.append(item[0])
  console.log(item)

}
}

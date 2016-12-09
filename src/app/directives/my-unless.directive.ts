import {Directive, TemplateRef, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyUnless]'
})
export class MyUnlessDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef
  ) { }

  @Input() set appMyUnless(condition:boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainerRef.clear();
    }
  }

}

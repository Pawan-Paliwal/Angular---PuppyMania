import { Component } from "@angular/core";

@Component({
    selector:'loading-spiner',
    template:'<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
    styleUrls:['./loading-spiner.css']
})
export class loadingSpiner{}
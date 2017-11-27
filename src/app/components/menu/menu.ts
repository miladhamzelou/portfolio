import { Component, OnInit} from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'component-menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']
})
export class MenuComponent implements OnInit {
    public hovered:any;
    public visible:boolean = false;

    constructor(public portfolio:Shared){
        
    }

    ngOnInit(){
        this.portfolio.menu.subscribe( value =>{
            this.visible = value;
        })
    }

    onHover(link){
        this.hovered = link;
    }
    onMouseOut(){
        this.hovered = '';
    }

    toggleMenu(){
        this.portfolio.toggleMenu(!this.visible);
    }

}

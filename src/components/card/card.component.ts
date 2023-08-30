import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class cardComponent implements OnInit{

    constructor(){}
    
    @Input()
    dateCreation: string = "26 de agosto de 2023"

    @Input()
    title: string = "Tecnologia e nova era"

    @Input()
    textNotice: string = "A tecnologia é algo que impreciona não é mesmo?"

    @Input()
    imageUrl: string = "https://thumbs.dreamstime.com/z/jornal-com-not%C3%ADcia-do-local-do-t%C3%ADtulo-87784712.jpg"

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}
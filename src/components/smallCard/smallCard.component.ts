import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'small-card',
    templateUrl: './smallCard.component.html',
    styleUrls: ['./smallCard.component.css']
})
export class smallCard implements OnInit {

    @Input()
    photoUrl: string = "https://img.freepik.com/fotos-gratis/vista-superior-velhas-pecas-de-jornal-frances_23-2149318857.jpg?w=2000"

    @Input()
    dataCreation: string = "29 de agosto 2023"

    @Input()
    title: string = "Aqui tem noticia"


    constructor(){}

    ngOnInit(): void {
        
    }
    
}
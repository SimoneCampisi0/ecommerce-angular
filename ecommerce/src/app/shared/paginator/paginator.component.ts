import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnInit{
  @Input() currentPage!: number
  @Input() totalPages!: number
  @Input() totalElements!: number
  @Output() nextPage = new EventEmitter<number>();

  // Array che rappresenta le pagine mostrate sul paginator
  visiblePages!: number[]
  numberOfVisiblePages: number = 5;

  ngOnInit() {
    this.updateVisiblePages()
    this.printAll()
  }

  printAll() {
    console.log("currentPage: ", this.currentPage)
    console.log("totalPages: ", this.totalPages)
    console.log("totalElements: ", this.totalElements)
  }

  /* Calcola le pagine precedenti e successive alla pagina corrente.
    ES: Se ci troviamo alla pagina 1 (currentPage = 1),
    il calcolo di firstVisiblePage sarà Math.max(1, 1 - Math.floor(5 / 2)) che risulta in 1.
    Il calcolo di lastVisiblePage sarà Math.min(10, 1 + 5 - 1) che risulta in 5.
    Quindi, le pagine visibili saranno [1, 2, 3, 4, 5] */
  updateVisiblePages(){
    let firstVisiblePage = Math.max(1, this.currentPage - Math.floor(this.numberOfVisiblePages / 2))
    let lastVisiblePage = Math.min(this.totalPages, firstVisiblePage + this.numberOfVisiblePages - 1);

    this.visiblePages = [];
    for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
      this.visiblePages.push(i);
    }
  }

  changePage(pageToChange: number) {
    console.log("pageToChange: ", pageToChange)
    this.currentPage = pageToChange;
    this.updateVisiblePages();
    this.nextPage.emit(this.currentPage)
    this.printAll()
  }


}

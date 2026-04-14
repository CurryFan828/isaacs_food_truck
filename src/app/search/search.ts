import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search implements OnInit, AfterViewInit{
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  searchTerm = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'] ?? '';
    })
  }

  ngAfterViewInit(): void {
    this.focusSearchInput();
  }

  search(): void {
    const trimmedTerm = this.searchTerm.trim();
    if(trimmedTerm) {
      this.router.navigateByUrl('/search/' + encodeURIComponent(trimmedTerm)).then(() => {
        this.focusSearchInput();
      });
      return;
    }

    this.router.navigateByUrl('/menu-page').then(() => {
      this.focusSearchInput();
    });
  }

  private focusSearchInput(): void {
    const input = this.searchInput?.nativeElement;
    if (!input) {
      return;
    }

    input.focus();
    const cursorPosition = this.searchTerm.length;
    input.setSelectionRange(cursorPosition, cursorPosition);


  }
}

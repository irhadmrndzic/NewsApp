import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(public newsService:NewsService,public formBuilder:FormBuilder, public router:Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
    searchTerm: ['', [Validators.required]]
    });
  }

  goToSearch(){
    this.router.navigateByUrl(`/search?search=${this.searchForm.controls.searchTerm.value}`);
}
}

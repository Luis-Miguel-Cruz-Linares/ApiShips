import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project_Colab';
  info: any [] = [];

  constructor(private CompanyService: CompanyService) {
    console.log ('El componente se ha inicializado');
  }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.CompanyService.getInfo().subscribe((info: any) => this.info = info);
   }
}

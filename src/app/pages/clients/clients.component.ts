import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  constructor(private client: ClientService) {

  }

  ngOnInit(): void {
      this.getClients();
      console.log("kevin bonito")
  }


  getClients(){
    this.client.getAll().subscribe({
      next: (data) =>{
        console.log(data);
      },
      error: (err) =>{
        console.log(err);
      },
      complete() {
          
      },
    })
  }

}

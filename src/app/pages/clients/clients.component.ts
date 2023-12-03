import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clients.service';
import { Client } from 'src/app/services/types/client';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [MessageService]
})
export class ClientsComponent implements OnInit {

  public clients: Client[] = [];
  public showDialog = false;
  public form: FormGroup

  constructor(private client: ClientService, private message: MessageService, private fb: FormBuilder) { 
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.getAllClients();
 
  }

  getAllClients(){
    this.client.getAll().subscribe({
      next: (data)=> {
        console.log(data);
        this.clients = data;

      }, 
      error: () => {
        this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel coletar os clientes, tente novamente mais tarde'});
      }
    });
  }


  createNewClient(){
    try{
      console.log(this.form.getRawValue());
      this.client.create(this.form.getRawValue()).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Usuario cadastrado com sucesso'});
        this.clients.push({id: this.clients.length + 1, active: true, name: this.form.get('name')?.value} as Client)
      });
    }catch(err){
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar o cliente, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
    
  }

  desactiveClient(client: Client){
    try{
      
      this.client.desactivate(client).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Usuario deletado com sucesso'});
        this.clients.slice(this.clients.findIndex(it => it.id == client.id));
        this.getAllClients();
      });
    }catch(err){
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar o cliente, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
}


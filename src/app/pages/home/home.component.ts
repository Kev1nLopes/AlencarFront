import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public form: FormGroup;
  public loaded = false;
  public imageSrc = " ";
  public obs: Observable<GeolocationPosition> | undefined;


  constructor(private fb: FormBuilder, private HttpClient : HttpClient) {
    this.form = this.initForm();
    
  }

  ngOnInit(): void {
      this.obs = new Observable((observer) => {
        let watchId: number;

        if('geolocation' in navigator){
          watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
            observer.next(position);
          }, (err: GeolocationPositionError) =>{
            observer.error(err);
          });
        }else{
          observer.error('Não possui permissão de geolocalização');
        }

        return {
          unsubscribe(){
            navigator.geolocation.clearWatch(watchId);
          }
        }
      })


      
  }

  initForm(){
    return this.fb.group({
      uploadFile: [null]
    })
  }

  async handleSubmit(){
    console.log(this.form.getRawValue())
    this.HttpClient.get('https://localhost:44368/Product/3').subscribe({
      next: (data) => {
        console.log(data);
      }
    }) 
  }

  callSubscribe(){
    this.obs?.subscribe({
     next(position){
      console.log('current position', position);
     },
     error(msg){
       console.log("deu ruim pra pegar a posicao", msg);
     }
    })
 }


  arquivoSelecionado(e: Event){
    const files = (e.target as HTMLInputElement);
    const file = files.files?.[0];
    var pattern = /image=*/;
    var reader = new FileReader();

    if(!file?.type.match(pattern)){
      alert('imagem invalida');
      return;
    }    

    reader.onload = this.__handleReaderLoeaded.bind(this);
    reader.readAsDataURL(file);
   
  }

  __handleReaderLoeaded(e: any) {
    console.log("_handleReaderLoaded")
    var reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
    this.loaded = true;
  }

  getStyle(){
    if(this.form.controls['uploadFile'].value == null){
      return {
        'cursor': 'not-allowed'
      }
    }else{
      return {}
    }
  }
}

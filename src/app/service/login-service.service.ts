import { HttpClient } from '@angular/common/http';
import { Injectable, ɵstringify } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) { 
    
  }
  
  public login(usuario: { login: any; senha?: string; }){
  
 //pegando o objeto usuario e convertendo para json antes de mandar para o back-end
 return this.http.post(AppConstants.baseLogin,JSON.stringify(usuario)).subscribe(data =>{
  /*corpo do retorno*/ 
  
  var token = JSON.parse(JSON.stringify(data))
  .Authorization.split(' ')[1];/*Retira o Bearer , 
  pq se encontra na primeira posição */ 
  
  //escondendo do servidor
  localStorage.setItem("token",token);
  
  //console.info("Token "+localStorage.getItem("token"));
  
  },error =>{
    console.error("Erro ao fazer Login");
  }
    
    )
  
  }
}

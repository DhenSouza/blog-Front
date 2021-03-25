import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor( private authService: AuthService,private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    if(this.confirmarSenha != this.user.senha){
      alert("Senhas não conferem")
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) =>{
        if(resp == null){
          alert("Esse Usuario já existe")
        } else {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert("Deu Bom Queride")
        }
      })
    }
    
  }

}

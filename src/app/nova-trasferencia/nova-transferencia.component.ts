import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Transferencia } from '../services/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
    selector:'nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss',]
})
export class NovaTransferenciaComponent
{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router )
  {

  }

  transferir() {
    console.log('Solicitada Nova trasnsferência');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir)
    .subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');

    },
    (error) => console.error(error));
  }

  limparCampos()
  {
    this.valor = 0;
    this.destino = 0;
  }
}

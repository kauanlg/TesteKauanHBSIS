import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ClienteService } from '../../cliente.services'
import { Cliente } from '../../cliente.model';
import { TipoCliente } from '../../tipoCliente.model';



@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    providers: [ClienteService],
    styleUrls: ['./clientes.component.css']
})
export class DetailComponent {


    public detail: Cliente = new Cliente();
    private id: number;
    public tipoClientes: TipoCliente[];

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private redirect: Router) {
        //Obter id selecionado
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id)
        });

        //Popular dados do JSON
        this.clienteService.getDetail(this.id).subscribe(data => {
            this.detail = null;
            this.detail = data.json();
        },
            error => console.log(error)
        );

        //Obter lista do campo tipo clientes
        this.clienteService.getTipoCliente().subscribe(data => {
            this.tipoClientes = null;
            this.tipoClientes = data.json() as TipoCliente[];
        },
            error => console.log(error)
        );
    }

    //Redireciona para listagem de clientes
    list() {
        this.redirect.navigateByUrl('/my-detail');
    }

    save() {
        //Valida se os campos estão preenchidos antes de inserir
        if (this.detail.nome == '' || this.detail.nome == null) {
            alert('Preencha o Nome');
        }
        else if (this.detail.identificador == '' || this.detail.identificador == null) {
            alert('Preencha o CPF/CNPJ');
        }
        else if (this.detail.telefone == '' || this.detail.telefone == null) {
            alert('Preencha o Telefone');
        }
        else if (this.detail.tipoClienteId == null || this.detail.tipoClienteId == 0) {
            alert('Preencha o Tipo de Cliente');
        }
        else {
            //Se os campos estiverem preenchidos, insere o registro
            this.clienteService.postData(this.detail)
                .subscribe(
                (response) => {
                    console.log(response);
                    this.list();
                },
                (error) => console.log(error)
                );
        }
    }
}
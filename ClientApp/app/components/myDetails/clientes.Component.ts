import { Component } from '@angular/core';

import { ClienteService } from '../../cliente.services'
import { Cliente } from '../../cliente.model';

@Component({
    selector: 'clientes',
    templateUrl: './clientes.component.html',
    providers: [ClienteService],
    styleUrls: ['./clientes.component.css']
})
export class ClienteComponent {
    public clientes: Cliente[];

    constructor(private clienteService: ClienteService) {
        this.getListData();
    }
    //Obter lista com todos clientes
    getListData() {
        this.clienteService.getData().subscribe(data => {
            this.clientes = null;
            this.clientes = data.json() as Cliente[];
        },
            error => console.log(error)
        );
    }
    //Deletar clientes
    onDelete(id: number) {
        var status = confirm("Deseja realmente deletar?");
        if (status == true) {
            this.clienteService.deleteData(id).subscribe(data => {
                this.getListData();
            },
                error => console.log(error)
            );
        }
    }
}

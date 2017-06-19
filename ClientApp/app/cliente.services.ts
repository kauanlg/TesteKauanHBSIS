import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Cliente } from './cliente.model'

@Injectable()
export class ClienteService {

    public cliente: Cliente;
    public headers: Headers

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=utf-8');
    }

    getTipoCliente() {
        return this.http.get('/api/Cliente/GetTipoCliente');
    }

    getData() {
        return this.http.get('/api/Cliente/GetData');
    }

    getDetail(id: number) {
        return this.http.get('/api/Cliente/GetDetails/' + id);
    }

    postData(detail: Cliente) {
        return this.http.post('/api/Cliente/Save', detail);
    }

    deleteData(id: number) {
        return this.http.delete('/api/Cliente/Delete/', new RequestOptions({
            headers: this.headers,
            body: id
        }));
    }
}
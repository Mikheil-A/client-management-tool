import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from './client';



@Injectable()
export class ClientsService {

  constructor(private _httpClient: HttpClient) {
  }


  search() {
    return this._httpClient.get('/api/client-db');
  }

  get(id: number) {
    return this._httpClient.get(`/api/client-db/${id}`);
  }

  create(data: Client) {
    return this._httpClient.post('/api/client-db', data);
  }

  update(id: number, data: Client) {
    return this._httpClient.put(`/api/client-db/${id}`, data);
  }

  delete(id: number) {
    return this._httpClient.delete(`/api/client-db/${id}`);
  }
}

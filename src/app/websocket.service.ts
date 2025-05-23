import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  private socket!: WebSocket;
  constructor() { 
     const connection = new WebSocket("ws://localhost:9000");
  }
  sendWS(task: object):
    void {
      this.socket.send(JSON.stringify(task))
     } 
}





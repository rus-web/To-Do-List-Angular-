import { Injectable } from '@angular/core';
import { ITaskData } from '../models/iTaskData.model';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {

  private socket!: WebSocket;
  constructor() { 
  this.socket = new WebSocket("ws://localhost:9000");
  this.socket.onopen = (event) => {  
    console.log("Connection opened");
  };
  this.socket.onerror = (error) => {
    console.log(`WebSocket Error: ${error}`);
  };
  this.socket.onclose = (event) => {
    console.log("Connection closed");
  };
  this.socket.onmessage = (message) =>{ 
    console.log("Server sent:", message.data);
  };
}

  sendWS(data: ITaskData): 
  void{
    this.socket.send(JSON.stringify(data))
  };

  closeConnection(): 
  void{
    this.socket.close();
  };
}
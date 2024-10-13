// websocket.service.ts
import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient: Client;
  private messageSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(new Date(), str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    this.stompClient.onConnect = (frame) => {
      this.stompClient.subscribe('/topic/messages', (message: Message) => {
        this.messageSubject.next(message.body);
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    this.stompClient.activate();
  }

  sendMessage(message: string) {
    this.stompClient.publish({ destination: '/app/sendMessage', body: message });
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }
}

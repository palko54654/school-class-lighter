import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WifiService {
  private ipAddress!: string;

  constructor(private http: HttpClient) {

  }

  setIpAddress(ip: string) {
    this.ipAddress = ip;
  }

  getIpAddress(): string {
    return this.ipAddress;
  }

  sendMessage(message: string) {
    const url = `http://${this.ipAddress}/?message=${message}`;
    console.log(url);
    return this.http.get(url, {responseType: 'text'}).toPromise();
  }
}
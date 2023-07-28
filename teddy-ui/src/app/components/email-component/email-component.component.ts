import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.scss']
})
export class EmailComponentComponent implements OnInit {
  @Output() sendEmailsEvent = new EventEmitter();

  endpoint = "https://dropmail.me/api/graphql/9sdf0nx96320n047"
  proxyurl = "https://cors-anywhere.herokuapp.com/";

  sec: any = '0' + 0;
  min: any = '1' + 0;
  hr: any = '0' + 0;

  startTimer: any;
  running = false;

  temporaryEmailData:{
    introduceSession:{
      id:string,
      expiresAt:string,
      addresses:[{address:string}]
    }
  } = {
    "introduceSession": {
      "id": "U2Vzc2lvbjrCsYIKM3NGz4Dnoh4zkq-W",
      "expiresAt": "2023-07-27T21:57:03+00:00",
      "addresses": [
          {
              "address": "hrgzf4bk@10mail.tk"
          }
      ]
  }
}

email = new FormControl(this.temporaryEmailData.introduceSession.addresses[0].address);

  ngOnInit(): void {
    this.sendRequest();
  }

  public async sendRequest(){

    const headers = {
      "content-type": "application/json",
      "Authorization": "9sdf0nx96320n047"
    }

    const graphqlQuery = {
      "operationName": "fetchEmail",
      "query": `mutation fetchEmail {introduceSession {id,expiresAt,addresses {address}}}`,
      "variables": {}
  };

  const response = await axios({
    url: this.proxyurl + this.endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery
  });

  this.start()

  

  this.setEmail(response);
  this.setTimeRemaining(response);
  this.sendEmailsEvent.emit(this.temporaryEmailData);
  this.searchForEmailsEvery()
  }

  public setEmail(response: AxiosResponse){

    this.temporaryEmailData = response.data.data;

    this.email.setValue(response.data.data.introduceSession.addresses[0].address);
  }

  setTimeRemaining(response: AxiosResponse){
    let ms = moment(new Date(response.data.data.introduceSession.expiresAt)).diff(moment(Date.now()))

    let duration = moment.duration(ms)

    this.sec = '0' + 0;
    this.min = Math.ceil(duration.asMinutes());
    this.hr = '0' + 0;
  }

  public fetchEmailTime(){

  }

  start(): void {
    if(!this.running){
      this.running = true
      this.startTimer = setInterval(() => {
        this.sec--;
        this.sec = this.sec >= 10 ? this.sec :'0' + this.sec;

        if(this.sec === '0'+ -1){
          this.min--;
          this.min = this.min >= 10 ? this.min:'0' + this.min;
          this.sec = '5' + 9;
        }

        if(this.min === '0'+ -1){
          this.hr--;
          this.hr = this.hr > 10 ? this.hr:'0' + this.hr;
          this.min = '5' + 9;
        }

        if(this.hr === '0'+ -1){
          this.hr = '0' + 0;
        }

        if(this.hr === '0'+ 0 && this.min === '0'+ 0 && this.sec === '0'+ 0){
          this.stop()
          this.sendRequest()
        }
      },1000)
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  public searchForEmailsEvery(){
    setInterval(()=> this.sendEmailsEvent.emit(this.temporaryEmailData),10000)
  }
}

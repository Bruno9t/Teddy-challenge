import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.scss']
})
export class EmailComponentComponent implements OnInit {

  endpoint = "https://dropmail.me/api/graphql/9sdf0nx96320n047"
  proxyurl = "https://cors-anywhere.herokuapp.com/"


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


  this.setEmail(response)

  console.log(response.data.data.introduceSession.addresses[0].address);

  }

  public setEmail(response: AxiosResponse){

    this.temporaryEmailData = response.data;

    this.email.setValue(response.data.data.introduceSession.addresses[0].address)
  }
}

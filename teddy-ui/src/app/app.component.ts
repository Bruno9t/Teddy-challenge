import { Component, OnInit } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teddy-ui';

  linkedin = 'https://www.linkedin.com/in/bruno-medeiros-201b39180/'
  gitHub = 'https://github.com/Bruno9t'

  endpoint = "https://dropmail.me/api/graphql/9sdf0nx96320n047ad323"
  proxyurl = "https://cors-anywhere.herokuapp.com/";

  emails = [];

  emailsTest =[
    {
      rawSize:'',
      fromAddr:'',
      toAddr:'',
      downloadUrl:'',
      headerSubject:'Welcome',
      text:`
      Hi dfr,
      Your temp email address is ready
      If you need help read the information below and not hesitate to contact us

      All the best,
      DropMail
      `
    },
    {
      rawSize:'',
      fromAddr:'',
      toAddr:'',
      downloadUrl:'',
      headerSubject:'Hello Dear',
      text:`
      Hi Dear,
      Your temp email address is ready
      If you need help read the information below and not hesitate to contact us

      All the best,
      DropMail
      `
    },
    ...this.emails
  ];

  emailSelected = this.emailsTest[0];
  emailSelectedIndex: number | null = null;
  lastSelected:any = {};

  ngOnInit(): void {

  }

  public async searchForEmails(event:any){
    console.log(event)
    const headers = {
      "content-type": "application/json",
      "Authorization": "9sdf0nx96320n047ad323"
    }

    const graphqlQuery = {
      "operationName": "fetchEmails",
      "query": `query fetchEmails {session(id:"${event.introduceSession.id}"){mails{rawSize,fromAddr,toAddr,downloadUrl,text,headerSubject}}}`,
      "variables": {}
  };

  const response = await axios({
    url: this.proxyurl + this.endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery
  });
  console.log(response)
  this.emails = response.data.data.session.mails;
  return this.emails;

  }

  public selectedEmail(event: any,index: number){
    console.log(index,this.emailSelectedIndex)
    if(this.emailSelectedIndex !== index && this.emailSelectedIndex !== null){
      this.lastSelected.className = this.lastSelected.className.split(' selected')[0]
    }
    this.lastSelected = event.target;
    this.emailSelected = this.emailsTest[index];
    this.emailSelectedIndex = index
    event.target.className += " selected"
  }


}

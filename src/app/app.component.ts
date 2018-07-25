import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testServer', content: 'Just Testing'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    console.log('server entry');
    console.log(this.serverElements);
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    console.log('blueprint entry');
    console.log(this.serverElements);
  }

  // onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
  //   console.log(blueprintData);
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.blueprintName,
  //     content: blueprintData.blueprintContent
  //   });
  //   console.log('blueprint Data: ');
  //   console.log(this.serverElements);
  // }

}

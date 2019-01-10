import { Component, State } from '@stencil/core';

class Node {
  name: string;
  value: string;
  selected: boolean = false;
}
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {


  @State() testNodes: Node[] = [];


  asyncGet(): Promise<any> {

    let testNodes = [{
      name: "aa",
      value: "AA",
      selected: false,
    }, {
      name: "bb",
      value: "BB",
      selected: true,
    },
    ]
    let promise = new Promise((resolve, _) => {
      setTimeout(() => resolve({  "testNodes": testNodes }), 1000)

    })
    return promise;
  }
  componentDidLoad() {
    this.asyncGet().then(result => {
      console.log(result.defaultNode);

      this.testNodes = result.testNodes;
    })
  }

  updateOptions() {
    
    this.testNodes =  [
    {
      name: "gg",
      value: "GG",
      selected: true,
    },
    ]
  }
  render() {
    return (
      <div>
        <ion-button onClick={()=>this.updateOptions()}>ddd</ion-button>
        

        <ion-select >
          {
            this.testNodes.map((node) =>
              <ion-select-option value={node} selected={node.selected} >{node.value}</ion-select-option>
            )
          }
        </ion-select>
      </div>

    );
  }
}

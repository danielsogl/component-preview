import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'nav-details'
})
export class NavDetails {

  @Prop() tech: any;

  componentDidLoad() {
    console.log(this.tech);
  }

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot='start'>
              <ion-back-button defaultHref='/'></ion-back-button>
            </ion-buttons>
            <ion-title>{this.tech.title}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          {/*<ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}"></ion-icon>*/}
          <ion-icon name={`logo-${this.tech.icon}`} style={{'color': this.tech.color}} size='large'></ion-icon>
          <p>{this.tech.description}</p>
        </ion-content>
      </ion-app>
    );
  }
}
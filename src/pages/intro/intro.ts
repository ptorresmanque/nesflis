import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides:any[] = [
    {
      title: "Bienvenido!!!",
      description: "<b>Nesflis</b> es una aplicacion para ver videos compartidos por la comunidad.",
      image: "assets/imgs/info.png",
    },
    {
      title: "Libre de pagos",
      description: "<b>Nesflis</b> no necesita pagos ni subcripciones, es totalmente gratuita!",
      image: "assets/imgs/map.png",
    },
    {
      title: "Comparte con tus amigos",
      description: "Comparte con tus amigos las mejores peliculas.",
      image: "assets/imgs/emergencia.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  saltar_tutorial(){
    this.navCtrl.setRoot(HomePage);
  }

}

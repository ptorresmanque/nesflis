import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: StreamingVideoOptions;
  constructor(public navCtrl: NavController, private streamingMedia: StreamingMedia) {
    this.options = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };
  }

  reproducir(){
    this.streamingMedia.playVideo('http://pillan.inf.uct.cl/~ptorres/secuencia_1.mp4', this.options);
  }

}

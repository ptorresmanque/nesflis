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
    this.streamingMedia.playVideo('http://pillan.inf.uct.cl/~ptorres/peliculas/Wonder%20Woman%20(2017)%20HDRip%20Dual%201080p%20%5bwWw.PelisMEGAHD.Pe%5d.mkv', this.options);
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ElectronService} from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private readonly electron: ElectronService,
  ) {
    console.log('HomeComponent INIT');
  }

  ngOnInit(): void {
    this.electron.ipcRenderer.on('toFrontend', (event, data) => {
      console.log('event received toFrontend: ', data);
    });
  }

  clickety(): void {
    this.electron.ipcRenderer.send('foo', {hello: 'world'});
  }

}

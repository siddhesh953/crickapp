import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cricket-tournament';
  navLinks: any[];
  activeLinkIndex = -1;
deferredPrompt: any;
showButton = false;
@HostListener('window:beforeinstallprompt', ['$event'])
onbeforeinstallprompt(e) {
  console.log(e);
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  this.deferredPrompt = e;
  this.showButton = true;
}

  constructor(private router: Router, private swUpdate: SwUpdate) {
    this.navLinks = [
        {
            label: 'MATCHES',
            link: './matches',
            index: 0
        }, {
            label: 'TEAMS',
            link: './teams',
            index: 1
        }, {
            label: 'PLAYERS',
            link: './players',
            index: 2
        },
        {
          label: 'TOURNAMENT SCORE TABLE',
          link: './tour',
          index: 2
      }
    ];
}
ngOnInit(): void {
  if (this.swUpdate.isEnabled) {

    this.swUpdate.available.subscribe(() => {

        if (confirm('New version available. Load New Version?')) {

            window.location.reload();
        }
    });
}
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

addToHomeScreen() {
  // hide our user interface that shows our A2HS button
  this.showButton = false;
  // Show the prompt
  this.deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  this.deferredPrompt.userChoice
  .then((choiceResult) => {
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
  this.deferredPrompt = null;
});
}

}

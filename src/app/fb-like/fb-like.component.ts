import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'fb-like',
    templateUrl: './fb-like.component.html',
  styleUrls: ['./fb-like.component.css']
})

export class FbLikeComponent implements AfterViewInit {
    @Input() url = location.href;
    

    constructor() {
        // initialise facebook sdk after it loads if required
        if (!window['fbAsyncInit']) {
            window['fbAsyncInit'] = function () {
                window['FB'].init({
                    appId: 'your-app-id',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.0'
                });
            };
        }

        // load facebook sdk if required
        const url = 'https://connect.facebook.net/en_US/sdk.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }

        const url1 = 'https://platform.twitter.com/widgets.js';
        if (!document.querySelector(`script[src='${url1}']`)) {
            let script = document.createElement('script');
            script.src = url1;
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
        // render facebook button
        window['FB'] && window['FB'].XFBML.parse();
    
        window['twttr'] && window['twttr'].widgets.load();
    }
}

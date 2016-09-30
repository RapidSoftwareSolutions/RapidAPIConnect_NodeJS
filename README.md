#RapidAPI Connect - Node.js SDK

This SDK allows you to connect to RapidAPI blocks from your node.js app. To start off, follow the following guide:

[![npm version](https://badge.fury.io/js/rapidapi-connect.svg)](https://badge.fury.io/js/rapidapi-connect)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

##Set-up:

First of all, download the npm module:

    npm install rapidapi-connect --save

Then, require the package in your code:

    const RapidAPI = require('rapidapi-connect');

Once required, the last step is to initialize the SDK with your project name and project API Key:

    const rapid = new RapidAPI('PROJECT_NAME', 'API_KEY');

That's all, your SDK is set up! You can now use any block by copying the code snippet from the marketplace.

##Usage:

To use any block in the marketplace, just copy it's code snippet and paste it in your code. For example, the following is the snippet fot the **Delivery.sendSMS** block:

    rapid.call('Delivery', 'sendSMS', {
        message: 'Hello, connect!',
        to : '4158496404'
    })
        .on('success', (payload) => {
            console.log('success');
        })
        .on('error', (err) => {
            console.warn(err);
        });

The following will call the **Calculate.add** block, and print the result:

    rapid.call('Calculate', 'add', {
            num1: 11,
            num2 : 2
        })
        .on('success', (payload) => {
            console.log(payload);
        })
        .on('error', (err) => {
            console.warn(err);
        });

The printed result will be `13`.

**Notice** that the `error` event will also be called if you make an invalid block call (for example - the package you refer to does not exist).

##Files:
Whenever a block in RapidAPI requires a file, you can either pass a URL to the file or a read stream.

###URL:
The following code will call the block MicrosoftComputerVision.analyzeImage with a URL of an image:

```
rapid.call('MicrosoftComputerVision', 'analyzeImage', {
    subscriptionKey : '############################',
    image : 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg
})
    .on('success', (payload) => {
        console.log('S');
        console.log(payload);
    })
    .on ('error', (payload) => {
        console.log('E');
        console.log(payload);
    });
```

###Read Stream
If the file is locally stored, you can read it using `fs` and pass the read stream to the block, like the following:
```
rapid.call('MicrosoftComputerVision', 'analyzeImage', {
    subscriptionKey : '############################',
    image : fs.createReadStream(__dirname + '/m.jpeg')
})
    .on('success', (payload) => {
        console.log('S');
        console.log(payload);
    })
    .on ('error', (payload) => {
        console.log('E');
        console.log(payload);
    });
```

RapidAPI uses the [form-data](https://github.com/form-data/form-data) library by [@felixge](https://github.com/felixge) to handle files, so please refer to it for more information.

##Issues:

As this is a pre-release version of the SDK, you may expirience bugs. Please report them in the issues section to let us know. You may use the intercom chat on rapidapi.com for support at any time.

##Licence:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


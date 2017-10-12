# Week 6

## Things to talk about
- zapier + google sheets = lightweight cms
- how to best use git
- firebase functions?


- Step calculating algorithm?
    - Apple Health API - not sure about google.



## Demo Project

QR Code Scanner App
  - present/generate a QR code
    - https://github.com/cssivision/react-native-qrcode
  - read a qr code
    - https://github.com/moaazsidat/react-native-qrcode-scanner
    - ```

      yarn add react-native-qrcode-scanner
      yarn add react-native-camera
      react-native link
      ```

  - Install on device to get camera working
    - npm install -g exp

  - demonstrate simple zapier integration

		webhook url: https://hooks.zapier.com/hooks/catch/2292424/i19xs4/
		test:
```
curl 'https://hooks.zapier.com/hooks/catch/2292424/i19xs4/?username=lewis&date=12345&eventId=1'

```

#Plan for today:

## Housekeeping
git: https://github.com/lewisdaly/ta
- Group Consultations (30 mins or so, next Wednesday?)


## Session
- Build the weather app! Lets do it in both React Native and Cordova
- Compare the implementations. How are they similar, where do they differ?
- Talk about network requests? If we have time
  - http://openweathermap.org/api
- Talk about wireframing?


Generally, apps aren't that useful without networking.
(Except for my first 2, which were great, in spite of being afraid of servers)

Things to think about:
- latency
- connectivity issues
- dealing with errors
  - eg. using http status codes (500, 400, 404, 401, 403, 504, 418 (I'm a teapot))

- Protocols and Formats
  - REST and JSON has become pretty popular
    - eg: https://facebook.github.io/react-native/releases/0.31/docs/network.html
  - Much better than XML
  - 2 new players:
    - GraphQL - super cool, built by Facebook
    - gRPC - Lower level, less data used

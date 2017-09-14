#Week 3

## Housekeeping
- I'll be travelling over the next 2 weeks
  - We will do consultations over skype
  - Let's say Wednesday or Thursday for now, but this may have to change
  - TODO: Set some times, probably similar to last week


## Session

### Questions
- Individual projects - how are we going?
  - Feel free to email me with some ideas, and we can talk about them
- Group projects

### Tools of the trade: Debugging network requests
- Postman
- Curl
- Swagger

### Let's talk about: Network requests

*Old:* SOAP & XML
*Current:* REST & JSON
**note: SOAP and REST aren't directly comparable, but these are good terms to search for**
*Next:*
- GraphQL (A new query language that works on top of REST)
- gRPC - lower level, more efficent. Based on http remote procedure calls. This method has been championed by Google

Generally, apps aren't that useful without networking.

Things to think about:
- latency
- connectivity issues
- dealing with errors
  - eg. using http status codes (500, 400, 404, 401, 403, 504, 418 (I'm a teapot))



### Build an app with firebase + react native

- The problem:
  - We have a bowl where employees can pay $1 for kitkats or coke
  - We often also borrow from the bowl to pay for lunch every now and then
  - The current method of managing employee bowl debt is archaic, and could be greatly improved.

- The app:
  - Simple bowl debt app.
  - Employees can download the app, and see how much each employee owes the bowl
  - They can then increase or decrease their debt when they borrow or pay back to the bowl

- Let's write some user stories!
**"As a user..."**
**"When I click, I expect"**


- Starting point:
  - https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html


- Environment variables:
https://github.com/zetachang/react-native-dotenv
*WARNING: DONT PUT .env in GIT!!!!*

# Notes

I liked the test a lot and with more time I think adding more visuals could be a nice addition.

A lot of used packages are a little out of date. Using Yarn was not making any problems but after testing it with npm there were a lot of corrections to make it all run.

I was having problems to properly test async call for the data. Some tests are not needed but that will depend on testing practices.

---

# NowTV React Interview

![NowTV](./logo.png)

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks.

1. In `service.js`, utilise the 'APIs' provided by `data.js` resolving to an array of chatlog messages in the following format, sorted by time.

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```
(Do not modify `data.js` to achieve this)

2. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:
  - Display the `avatar` where applicable
  - Display the `email` on hover
  - Format the timestamp to be human readable

3. Push on a public GitHub repository.


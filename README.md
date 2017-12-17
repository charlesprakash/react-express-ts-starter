# yatner-sk

*Yet another typescript, node, express, react starter kit.* I searched for a good starter kit that uses create-react-app and expressjs that is readily configured for development, unit testing and deployment. I didn't find anything that I could readily use and I had to plumb a few things together. I am now sharing the output I produced so if someone else needs it they can use it too. :-)

---

## Stack used

* Language - **typescript**
* Package manager - **yarn**
* Server - **nodejs**
* Web framework - **expressjs**
* Frontend tooling - **create-react-app**
* Unit testing - **jest**
* REST API testing - **supertest**
* Build tools - **concurrently**, **nodemon**, **webpack**

---

## Get started

1. Clone the repo: `git clone https://github.com/charlesprakash/yatner-sk`
2. Install the dependencies: `yarn install`
3. Start the app in watch mode: `yarn watch`

Make changes to your heart's content.

---

## How to use

### Install dependencies

Run `yarn install` from the root. This will install the dependencies in both the client and server.

### Building the projects

Run `yarn build` from the root. This will build both the client and server.

### Running unit tests

Run `yarn test` from the root. This will run tests from both the server and the client.

### Running the app (demo mode)

Run `yarn start` from the root (after building). This will start the server which will setup the static routes to client app as well.

### Running the app in watch mode

Run `yarn watch` from the root (after building). This will setup typescript watch (`tsc -w`) with `nodemon` on the server side and run the react start scripts which will run via the webpack dev server. The API requests are proxied from the client to the server.

### Deploying

The server components are built into the `server\dist` folder and the client components are built into `client\build` directory. Deploying these two folders `server\dist` and `client\build` folders will deploy the complete app.

---

> NOTE: I tested all this configuration on Windows 10. Test results and fixes based on other platforms are welcome.

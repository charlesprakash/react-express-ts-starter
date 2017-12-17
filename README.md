# yatner-sk

*Yet another typescript, node, express, react starter kit.* I searched for a good starter kit that uses create-react-app and expressjs that is readily configured for development, unit testing and deployment of web apps both the server side and the client side. I didn't find anything that I could readily use and I had to plumb a few things together. I am now sharing the output I produced so if someone else needs it they can use it too. :-)

I intend to test this from time to time and maintain it with my new findings.

---

## Stack used

* Primary language(s) - **typescript**, **HTML5**, **CSS**
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
3. Build the client and server projects: `yarn build`
4. Start the app in watch mode: `yarn watch`

Keep making changes to your heart's content.

---

## Usage

### Install dependencies

Run `yarn install` from the root. This will install the dependencies in both the client and server.

### Building the projects

Run `yarn build` from the root. This will build both the client and server.

### Running unit tests

Run `yarn test` from the root. This will run tests from both the server and the client.

### Running the app (demo mode)

Run `yarn start` from the root (after building). This will start the server which will setup the static routes to client app as well. Note that this *does not* start the webpack development server for the client project.

### Running the app in watch mode

Run `yarn watch` from the root (after building). This will setup typescript watch (`tsc -w`) with `nodemon` on the server side and run the react start scripts which will run via the webpack development server. The API requests are proxied from the client to the server through the `proxy` setting in client project's `package.json`.

### Deploying

The server components are built into the `server\dist` folder and the client components are built into `client\build` directory. Deploying these two folders `server\dist` and `client\build` under a common root folder will deploy the complete app. Be sure to include the `package.json` from the root here so when your hosting environment calls `npm start` only your server will start setting up the static routes for the client.

Your deployed project structure should look like this:

```
your-app
|--client
   |--build/*
   package.json
|--server
   |--dist/*
   package.json
package.json
```

---

> NOTE: I tested all this configuration on Windows 10. Test results and fixes based on other platforms are welcome.

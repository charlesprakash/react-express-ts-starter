import * as express from "express";
import * as path from "path";

export class ClientApp {
    setup(app: express.Application): void {
        // setup static files
        app.use("/static", express.static(path.join(__dirname, "../../client/build/static")));

        // setup top level files
        for (let url of ["favicon.ico", "manifest.json", "asset-manifest.json", "index.html"]) {
            app.get("/" + url, (req, res) => res.sendFile(path.join(__dirname, "../../client/build/" + url)));
        }

        // catch all in case we get something else
        app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../../client/build/index.html")));
    }
}

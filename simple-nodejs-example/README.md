# Simple web app for node.js
This is a quick and dirty node.js app cobbled together for the purposes of demonstrating how toDockerize/containerize a simple app.

Exposes web server on port `8080` as per `./app.js`

See `Dockerfile` for more details

Build:
docker build -f Dockerfile -t sezos .

Run:
docker run -d --name sezoweb -p 8080:8080 sezos

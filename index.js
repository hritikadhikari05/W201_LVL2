const http = require("http");
const fs = require('fs');
const minimist = require('minimist');

let homeContent ="";
let projectContent = "";
let registrationContent="";


let port;

args= minimist(process.argv.slice(1));

port = args.port;



fs.readFile("home.html", (err, home) => {
    if(err) throw err;

    homeContent = home;
});


fs.readFile("project.html", (err, project) =>{
    if(err) throw err;

    projectContent = project;
});

fs.readFile("registration.html", (err, registration) =>{
    if (err) throw err;

    registrationContent = registration;
})


http
 .createServer((req, res) =>{
    let url = req.url;

    res.writeHead(200, { "Content-Type" : "text/html"});

    switch(url){
        case "/project": 
            res.write(projectContent);
            res.end();
            break;
        case "/registration":
            res.write(registrationContent);
            res.end();
            break;
        default:
            res.write(homeContent);
            res.end();
            break;
    }
 })
 .listen(port);
const express = require('express');
const logic = require('./logic');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 8085;
let users = {
admin: {password: "123456", name: "Admin", surname: "Admin", eMail:"admin@gmail.com", age:"99", dateOfBirth:"1/01/1970", telNum:"999999978", city:"Warszawa"},
jan: {password: "jan1234", name: "Jan", surname: "Kowalski", eMail:"jkowalski92@outlook.com", age:"30", dateOfBirth:"23/03/1992", telNumber:"698523153", city:"Katowice"},
leslex:{password: 'leslex', name: "Paweł", surname: "Woroniecki", eMail:"Pawelwr.121@gmail.com", age:"25", dateOfBirth:"17/07/1997", telNumber:"697877308", city:"Szczecin"}
};
app.post('/auth/login', cors(), (request, response) => {
response.header("Access-Control-Allow-Origin", "*");
let login = request.body.login;
let password = request.body.password;
if (!users[login]) {
response.json({logged: false, message: `User not exists ${login}.`});
return null;
} else {
    if (users[login].password != password) {
    response.json({logged: false, message: `Password is not valid.`});
    } else {
    response.json({logged: true, message: `User login success ${login}.`});
    }
    }
    });
    app.get('/userDetails/:login', cors(), function (request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    let login = request.params.login;
    let data = users[login];
    response.status(200).send(data);
    });
    app.get('/allUsers', cors(), function (request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.status(200).send(users);
    });


let mathTools = new logic.MathTools();
    app.post('/calc/add', (request, response) => {
    console . log ( "New CALC/ADD request" , request . body );
    let a = request . body . a ;
    let b = request . body . b ;
    response . json ({ result: mathTools . add ( a , b )}
);
});
    app.post('/calc/sub', (request, response) => {
        console . log ( "New CALC/SUB request" , request . body );
        let a = request . body . a ;
        let b = request . body . b ;
        response . json ({ result: mathTools . sub ( a , b )},
       );
       });
    
       app.post('/calc/mul', (request, response) => {
        console . log ( "New CALC/MUL request" , request . body );
        let a = request . body . a ;
        let b = request . body . b ;
        response . json ({ result: mathTools . mul ( a , b )},
       );
       });
    
       app.post('/calc/div', (request, response) => {
        console . log ( "New CALC/DIV request" , request . body );
        let a = request . body . a ;
        let b = request . body . b ;
        response . json ({ result: mathTools . div ( a , b )},
       );
       });
    
       app.post('/calc/pow', (request, response) => {
        console . log ( "New CALC/POW request" , request . body );
        let a = request . body . a ;
        let b = request . body . b ;
        response . json ({ result: mathTools . pow ( a , b )},
       );
       });

    app.listen(port, () => console.log(`Aplikacja działa na porcie ${port}`));
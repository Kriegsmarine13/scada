const express = require('express');
const cors = require('cors');
const app = express();
const initOptions = {
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to database:', cp.database);
    }
}
const pgp = require("pg-promise")(initOptions);
const db = pgp("postgres://postgres:Ssdku2019@127.0.0.1:5432/test");

app.use(cors());
app.use(express.json());
app.options('*', cors())

app.get('/', async function(req, res) {
    await db.any("SELECT * FROM test_table")
        .then(async function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
})

app.post('/login', async function(req, res) {
    console.log("Incoming post...");
    console.log("Post data: ", req.body);
    let login = req.body.userName;
    let password = req.body.password;
    let queryStr = "SELECT * FROM users WHERE login = " + login + " AND password = " + password;
    console.log("Quesry String: ", queryStr);
    try {
        let query = await db.any("SELECT * FROM users WHERE login = '" + login + "' AND password = '" + password + "'");
        console.log("Search query: ", query);
        if(Object.keys(query).length === 0) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    } catch(dbErr) {
        console.log("Error looking up user...");
        console.log(dbErr);
    }
})

app.listen(3099, function(){
    console.log('Listening on port 3099...');
});
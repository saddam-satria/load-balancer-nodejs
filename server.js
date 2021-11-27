const express = require('express')
const routes = require('./app/router/Routes.js')

const app = express()
const PORT = process.argv[2] ||   process.env.PORT  || 5001
const serverName = process.argv[3]


app.use(routes)

app.get('/', (req,res) => {
    res.status(200).send({
        message: `running from server ${serverName}`,
        request : {
            url : req.get,
            method : req.method,
            hostname : req.hostname,
            headers : req.headers
        }
    },

    );
})


app.listen(PORT, () =>{
    console.log(`server 1 running on PORT ${PORT}`);
})

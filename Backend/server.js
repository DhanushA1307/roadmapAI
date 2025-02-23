const express  = require('express');
const app = express();

app.listen(process.env.PORT ||  3000, ()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    app.get('/',(res,req)=>{
        res.send('Hello World');
    });
});

require('dotenv').config(); 

const server = require('./API/server.js');

const port = process.env.PORT || 5000; 
server.listen(port, () => {
    console.log(`**** Server up on PORT ${port} ****`)
})
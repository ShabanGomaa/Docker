require('dotenv').config()

var app = require('./app');

app.get('/', (req: any, res: any) => {
  res.status(200).send({ isSuccess: true, message: "Success" });
});

const portNumber = process.env.port || process.env.PORT || 3000;
app.listen(portNumber);

console.log(`Application is running on: ${portNumber}`);


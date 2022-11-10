// console.info('Declaring dependencies...');
/*require('dotenv').config();

const express = require('express')
const {urlencoded, json} = require('body-parser')

const app = express();

require('./utils/dbUtils')

const PORT = 5000 | process.env.PORT;

// console.info('Initialising request body parser for the server app...');
// console.info('Extended is set as true to allow browser to stay authenticated as opposed to just with Postman. Source: https://stackoverflow.com/questions/46628069/passport-local-strategy-working-in-postman-but-not-in-browser');
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(require('cookie-parser')());





// console.info('...loaded resources.');

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
*/
const path = require('path')
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

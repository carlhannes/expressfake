const argv = require('minimist')(process.argv.slice(2));
const faker = require('faker');
const express = require('express');

const app = express();

const port = argv.p || 1994;

function fixQuery(query) {
  return `{{${query.replace(/,/gm, '}},{{')}}}`;
}
 
app.get('/', function (req, res) {
  res.send(`Example: http://localhost:${port}/custom/10/name.lastName,name.firstName,name.suffix`);
})

app.get('/custom/:count/:query', function(req, res) {
  const output = [req.params.query];
  for (let index = 0; index < req.params.count; index++) {
    output.push(faker.fake(fixQuery(req.params.query)));
  }
  res.set('Content-Type', 'text/plain');
  res.send(output.join('\n'));
});
 
app.listen(port);
console.log(`Listening on ${port}`);

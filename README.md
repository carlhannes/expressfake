# expressfake
## A combination of express.js and faker.js
This library is a convenient way of creating random csv data from a URL

Example: 

```bash
git clone git@github.com:carlhannes/expressfake.git
cd expressfake && npm start
start http://localhost:1994/custom/10/name.lastName,name.firstName,name.suffix
```

## How?
The url is built up like this:
`http://localhost:1994/custom/<Number of items>/<Columns separated by comma>`

The API is faker.js official API, check it out here:
https://github.com/marak/Faker.js/#user-content-api-methods

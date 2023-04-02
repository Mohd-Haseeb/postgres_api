const app = require('./src/app');

const pool = require('./src/pool');

pool.connect({
    host:'localhost',
    port:5432,
    database:'socialrepo',
    user:'mohdhaseeb',
    password:'',
})
  .then(() => {
    app().listen(3000, () => console.log(`server is up and running`))
  })
  .catch(err => console.error(err));
    


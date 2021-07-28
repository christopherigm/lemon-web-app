/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const fetchData = require('./fetch-data');


const port = process.env.NODEJS_PORT;
const app = express();
const pwd = __dirname.split(path.sep);
pwd.pop();
const statics = `${pwd.join(path.sep)}/build/static`;
const assets = `${pwd.join(path.sep)}/build/assets`;

app.use('/static', express.static(statics));
app.use('/assets', express.static(assets));

const hbs = exphbs.create({
  helpers: {
    escapeJS: ( data ) => {
      return JSON.stringify( data );
    }
  },
  extname: '.hbs'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.enable('view cache');
app.locals.layout = false;

app.get('/', (req, res) => {
  return res.render('index', {
    title: 'Limón News - Noticias al momento',
    description: 'Limón News - Noticias al momento',
  });
});

app.get('/:category', (req, res) => {
  return res.render('index', {
    title: `Limón News - ${req.params.category}`,
    description: 'Limón News - Noticias al momento',
  });
});

app.get('/:category/:postSlug', (req, res) => {
  const URL = `posts?filter[slug]=${req.params.postSlug}&include=category,author,hashtags`;
  fetchData(URL)
    .then((data) => {
      const post = data.data[0];
      if ( !post ) {
        return res.render('index', {
          data: null,
          title: 'Limón News - Noticia no encontrada :O',
          description: 'Limón News - Noticia no encontrada :O',
        });
      }
      return res.render('index', {
        data: post,
        description: `Limón News - ${post.attributes.title}`,
        title: `Limón News - ${post.attributes.title}`
      });
    })
    .catch((error) => {
      console.log('>>>>>>>>>> error', error);
      return res.send(`Error ${error}`);
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

import express from 'express';
import path from 'path';

var app = express();

// Config the View
import ECT from 'ect';
const view_path = path.resolve(__dirname, 'views');
var ectRenderer = ECT({watch: true, root: view_path, ext: '.ect'});
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
app.set('views', view_path);

// Set assets folder
app.use(express.static(path.resolve(__dirname, '..', 'assets')))

// Routs
  .get('/', function (req, res) {
    res.render('pages/index',
      {title: 'Start!'}
    )
  })

  .get('/about', function (req, res) {
    res.render('pages/about',
      {title: 'About!'}
    )
  })

const server = app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

// export http.server object so universal-hot-reload can access it
module.exports = server;
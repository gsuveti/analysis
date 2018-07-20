// These polyfills must be the first thing imported in node
import 'angular2-universal/polyfills';
import * as path from 'path';
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import {AppModule} from "./src/app/app.module";

// Angular 2 Universal
const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');



// Set the engine
app.engine('html', ngExpressEngine({
  bootstrap: AppModule // Give it a module to bootstrap
}));


app.set('view engine', 'html');

app.get('/**/*', (req: Request, res: Response) => {
  res.render('../dist/index', {
    req,
    res
  });
});


// Serve static files
app.use(express.static(ROOT, {index: false}));

// send all requests to Angular Universal
// if you want Express to handle certain routes (ex. for an API) make sure you adjust this
app.get('/', ngApp);
app.get('/home', ngApp);
app.get('/about', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});

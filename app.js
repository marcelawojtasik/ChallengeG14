const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

/* Routes import */
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const authRoutes = require('./src/routes/auth.routes');
const adminRoutes = require('./src/routes/admin.routes');

const PORT = 3004;

/*Template Engines */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));


/*Middlewares */
app.use(express.urlencoded());
app.use(express.json()); /*Para q cuando mando algo x post a traves del body, traduce a un js q el prog pueda entender */
app.use(methodOverride('_method')); /*NPM i "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it" p q desde los form pueda mandar peticiones distintas a post*/

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, ()=> console.log(`Servidor corriendo en 👻 http://localhost:${PORT}`));

/*Crear scripts en package.json
"dev" : "nodemon app.js",
    "start" : "node app.js" */
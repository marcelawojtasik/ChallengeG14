const express = require('express');
const app = express();

/* Routes import */
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const authRoutes = require('./src/routes/auth.routes');
const adminRoutes = require('./src/routes/admin.routes')

const PORT = 3004;

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);




app.listen(PORT, ()=> console.log(`Servidor corriendo en 👻 http://localhost:${PORT}`));

/*Crear scripts en package.json
"dev" : "nodemon app.js",
    "start" : "node app.js" */
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta para recibir datos del webhook
app.post('/webhook', (req, res) => {
    const body = req.body; // Datos recibidos desde el webhook
    console.log('Datos recibidos:', body);
    console.log(res);

    res.status(200).send('Datos recibidos correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal - página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta del juego
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

// API de salud para verificar que el servidor funciona
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Servidor funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

// Manejar rutas no encontradas
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📁 Sirviendo archivos desde: public/`);
    console.log(`🎮 Juego disponible en: http://localhost:${PORT}/game`);
});
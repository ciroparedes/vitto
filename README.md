# 🎮 COFRE Token - Juego Web Profesional

## 🚀 Despliegue Automático en GitHub Pages

Este proyecto está configurado para **despliegue automático** en GitHub Pages usando GitHub Actions.

### ✅ Características del Proyecto

- **🎵 Sistema de Audio Profesional**: Howler.js con música de fondo y efectos
- **🎨 Efectos Visuales Avanzados**: Animaciones CSS3 optimizadas
- **📱 Diseño Responsivo**: Compatible con todos los dispositivos
- **⚡ Rendimiento Optimizado**: HTML estático para máxima velocidad
- **🔧 Arquitectura Simplificada**: Ideal para GitHub Pages y otros PaaS

## 🌐 URLs de Despliegue

- **GitHub Pages**: `https://[tu-usuario].github.io/[nombre-repo]`
- **Página Principal**: `/` (Página de mantenimiento)
- **Juego Demo**: `/game.html`

## 🚀 Cómo Desplegar

### 1. Configuración Automática (Recomendado)

```bash
# 1. Hacer push a la rama main/master
git add .
git commit -m "Deploy: Actualización del juego"
git push origin main

# 2. GitHub Actions se ejecutará automáticamente
# 3. El sitio estará disponible en GitHub Pages en ~2-3 minutos
```

### 2. Configuración Manual de GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio
2. Selecciona **Source**: `Deploy from a branch`
3. Selecciona **Branch**: `gh-pages`
4. Selecciona **Folder**: `/ (root)`
5. Haz clic en **Save**

## 🎵 Sistema de Audio

### Archivos de Audio Requeridos:
```
https://assets.cofretoken.com/sounds/
├── background.mp3  # Música de fondo (loop automático)
├── cpu.mp3         # Sonido del CPU
├── user.mp3        # Sonido del usuario
└── end.mp3         # Sonido de fin de juego
```

### Características del Audio:
- **🎼 Música de fondo automática** al cargar el juego
- **🔊 Efectos de sonido balanceados** (usuario más prominente)
- **📱 Compatible con móviles** (manejo de autoplay)
- **🛡️ Manejo de errores robusto**

## 🛠️ Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/[tu-usuario]/[nombre-repo].git
cd [nombre-repo]

# Instalar dependencias
npm install

# Iniciar servidor local
npm start

# Abrir en navegador
# http://localhost:8000/        (Página principal)
# http://localhost:8000/game    (Juego)
```

## 📁 Estructura del Proyecto

```
COFRE-Token/
├── 📁 .github/workflows/     # GitHub Actions
│   └── deploy.yml           # Configuración de despliegue
├── 📁 public/               # Archivos estáticos
│   ├── 🏠 index.html       # Página principal
│   └── 🎮 game.html        # Juego demo
├── 📄 server.js            # Servidor Express (desarrollo)
├── 📦 package.json         # Dependencias
└── 📚 README.md            # Esta guía
```

## 🔧 Configuración de GitHub Actions

El archivo `.github/workflows/deploy.yml` está configurado para:

- ✅ **Trigger automático** en push a main/master
- ✅ **Build del proyecto** (instalación de dependencias)
- ✅ **Despliegue a GitHub Pages** usando la carpeta `public/`
- ✅ **Soporte para dominio personalizado** (opcional)

## 🌐 Dominio Personalizado (Opcional)

Para usar un dominio personalizado:

1. Edita `.github/workflows/deploy.yml`
2. Cambia `cname: cofretoken.com` por tu dominio
3. Configura los DNS de tu dominio:
   ```
   CNAME: [tu-usuario].github.io
   ```

## 📊 Ventajas de GitHub Pages

| Característica | GitHub Pages | Otros Hosting |
|----------------|--------------|---------------|
| **Costo** | ✅ Gratis | 💰 Pago |
| **SSL** | ✅ Automático | ⚠️ Manual |
| **CDN Global** | ✅ Incluido | 💰 Extra |
| **Despliegue** | ✅ Automático | ⚠️ Manual |
| **Uptime** | ✅ 99.9%+ | ⚠️ Variable |

## 🔍 Troubleshooting

### El sitio no se actualiza:
1. Verifica que el workflow se ejecutó correctamente en **Actions**
2. Revisa que GitHub Pages esté configurado en **Settings** > **Pages**
3. Espera 2-3 minutos para la propagación del CDN

### Audio no funciona:
1. Verifica que las URLs de audio sean accesibles
2. Revisa la consola del navegador para errores
3. Prueba en modo incógnito (sin extensiones)

## 🎯 Próximos Pasos

1. **📈 Analytics**: Añadir Google Analytics
2. **🔒 Security**: Configurar Content Security Policy
3. **📊 Monitoring**: Implementar error tracking
4. **🚀 Performance**: Optimizar imágenes y assets

## 💡 Comandos Útiles

```bash
# Ver estado del despliegue
git log --oneline -5

# Forzar redespliegue
git commit --allow-empty -m "Trigger deploy"
git push origin main

# Ver logs de GitHub Actions
# Ve a: https://github.com/[usuario]/[repo]/actions
```

---

**¡Tu juego está listo para el mundo! 🌍🎮**

**GitHub Pages**: Despliegue automático y gratuito  
**Audio Profesional**: Sistema completo con Howler.js  
**Rendimiento Óptimo**: HTML estático para máxima velocidad
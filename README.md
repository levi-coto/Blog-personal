# Blog Personal - Despliegue en Firebase Hosting

Este proyecto es un blog personal construido con React, Vite y Firebase.

## Pasos para desplegar en Firebase Hosting desde cualquier editor

### 1. Instalar Firebase CLI
Si no tienes Firebase CLI instalado, instálalo globalmente:
```bash
npm install -g firebase-tools
```

### 2. Iniciar sesión en Firebase
Inicia sesión en tu cuenta de Firebase:
```bash
firebase login
```

### 3. Inicializar el proyecto (si no está hecho)
Si el proyecto no está inicializado con Firebase, ejecuta:
```bash
firebase init
```
Selecciona "Hosting" y elige el proyecto existente o crea uno nuevo.

### 4. Construir el proyecto
Construye la aplicación para producción:
```bash
npm run build
```
Esto generará los archivos en la carpeta `dist`.

### 5. Desplegar a Firebase Hosting
Despliega la aplicación:
```bash
firebase deploy --only hosting
```

### 6. Acceder al sitio
Una vez desplegado, Firebase te dará la URL del sitio. También puedes ver el estado en la consola de Firebase.

## Ejecutar localmente
Para desarrollo local:
```bash
npm install
npm run dev
```

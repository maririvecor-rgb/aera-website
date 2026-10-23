# AERA — Sitio oficial

Sitio estático de AERA, un dispositivo tecnológico en desarrollo para apoyar la recopilación de datos ambientales durante el trabajo de campo.

## Vista previa local

Abre `index.html` directamente en un navegador o sirve la carpeta con cualquier servidor estático. Por ejemplo, con Python:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Publicación en GitHub Pages

1. Sube los archivos de este repositorio a GitHub.
2. En **Settings → Pages**, selecciona la rama y la carpeta raíz (`/`).
3. Guarda los cambios. Las rutas de páginas y recursos son relativas para funcionar en un repositorio de proyecto.

## Estructura

- `index.html`: inicio
- `dispositivo.html`: propósito, componentes y flujo conceptual
- `proyecto.html`: contexto y etapa de desarrollo
- `assets/`: logotipo, fotografías y render del dispositivo proporcionados para el proyecto

## Recursos pendientes

El repositorio no incluye una fotografía submarina de tortugas. La portada usa una fotografía de trabajo de campo con tortuga marina disponible en los materiales. No se ha creado ni sustituido ningún logotipo o render del dispositivo. La página del proyecto usa el clip proporcionado `assets/enviroment/clips/toma08_11_v2.mp4`, con un fotograma del propio video como imagen previa.

AERA se presenta en la página del proyecto como un producto que surge de Cada aleta cuenta.

El sitio describe sensores ambientales, GPS y registro de datos como componentes contemplados en el proyecto. Su implementación y validación siguen en desarrollo; el diagrama de la página del dispositivo es conceptual.

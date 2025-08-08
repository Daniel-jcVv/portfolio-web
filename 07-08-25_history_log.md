# Log de Aprendizaje: Portfolio Web con FastAPI

Este documento registra el progreso, las decisiones y los aprendizajes clave durante la creación del portfolio web.

## Sesión 1: Fundamentos y "Hola, Mundo"

**Fecha:** 2025-08-07

### Objetivos:
- Configurar el entorno de desarrollo inicial.
- Crear y ejecutar la aplicación más simple posible con FastAPI.
- Entender los conceptos de servidor web, puerto y ruta.

### Pasos Realizados:
1.  **Configuración del Tutor:** Se estableció el rol de Gemini como tutor, siguiendo las directrices de `GEMINI.md`.
2.  **Diagnóstico Inicial:** Se confirmó que el entorno del usuario (Python, editor) estaba listo y que su interés principal es el **desarrollo web moderno**.
3.  **Entorno Virtual:**
    - Se discutió la importancia de los entornos virtuales.
    - Se decidió usar `.venv` como nombre para la carpeta del entorno por ser una convención moderna que la oculta en el listado de archivos.
    - **Comando ejecutado:** `python -m venv .venv`
    - **Activación:** `source .venv/bin/activate`
4.  **Instalación de Dependencias:**
    - Se instalaron las dos librerías fundamentales para empezar.
    - **Comando ejecutado:** `pip install fastapi uvicorn`
5.  **Creación del Servidor Básico:**
    - Se explicó el concepto de **servidor web**, **puerto** y **ruta**.
    - El usuario creó el archivo `main.py`.
    - Se definió la primera ruta (`/`) usando el decorador `@app.get("/")` para responder a peticiones `GET`.
    - **Código en `main.py`:**
      ```python
      from fastapi import FastAPI

      app = FastAPI()

      @app.get("/")
      def read_root():
          return {"message": "Hola, Mundo"}
      ```
6.  **Creación de este Log:** Se solicitó crear este archivo `log.md` para llevar un seguimiento de la sesión.

### Próximo Paso:
- Ejecutar el servidor con `uvicorn` y verificar el resultado en el navegador.

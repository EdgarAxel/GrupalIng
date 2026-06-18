# BuscaSofa

## Descripción del proyecto

Este repositorio contiene el trabajo desarrollado para la **Actividad 3** de la asignatura **Ingeniería del Software Avanzada**, centrada en la aplicación de metodologías de desarrollo dirigidas por pruebas (**TDD**) y desarrollo guiado por comportamiento (**BDD**).

El proyecto se ha realizado sobre una aplicación web desarrollada en **React** denominada **BuscaSofa**, cuyo propósito es proporcionar una interfaz para la consulta y visualización de información obtenida desde servicios externos.

Durante el desarrollo se ha trabajado sobre una base de código existente, aplicando un proceso de análisis, corrección y ampliación funcional apoyado en pruebas automatizadas.

---

## Objetivos

Los principales objetivos perseguidos durante el desarrollo del proyecto han sido los siguientes:

* Analizar una base de código existente e identificar incidencias mediante pruebas automatizadas.
* Corregir los errores detectados respetando los escenarios de validación definidos.
* Incorporar nuevas funcionalidades al producto manteniendo la estabilidad del sistema.
* Implementar pruebas unitarias y pruebas de aceptación que permitan verificar el correcto funcionamiento de la aplicación.
* Aplicar buenas prácticas de desarrollo, control de versiones y validación continua.

---

## Funcionalidades implementadas

Entre las actuaciones realizadas destacan las siguientes:

* Corrección de incidencias detectadas por las pruebas existentes.
* Implementación de una página para la gestión de rutas no válidas (*Not Found*).
* Adaptación de elementos de navegación para satisfacer los requisitos definidos en los escenarios de validación.
* Ampliación de la información disponible dentro de la aplicación.
* Incorporación de nuevos componentes de interfaz.
* Desarrollo de nuevas pruebas automatizadas mediante Cypress.

---

## Tecnologías utilizadas

| Tecnología            | Descripción                           |
| --------------------- | ------------------------------------- |
| React                 | Desarrollo de la interfaz de usuario  |
| Vite                  | Entorno de desarrollo y construcción  |
| Vitest                | Pruebas unitarias                     |
| React Testing Library | Validación de componentes             |
| Cypress               | Pruebas de aceptación (E2E)           |
| JavaScript            | Lenguaje de programación              |
| Git                   | Control de versiones                  |
| GitHub                | Gestión y publicación del repositorio |

---

## Ejecución del proyecto

### Instalación de dependencias

```bash
npm install
```

### Ejecución de la aplicación

```bash
npm run dev
```

### Ejecución de pruebas unitarias

```bash
npm test
```

Las pruebas unitarias han sido implementadas utilizando Vitest y React Testing Library.

### Ejecución de pruebas de aceptación

```bash
npm run cypress:open
```

o alternativamente:

```bash
npx cypress open
```

## Estrategia de validación

La validación del proyecto se ha realizado mediante una combinación de pruebas unitarias y pruebas de aceptación.

Las pruebas unitarias permiten verificar el comportamiento individual de los componentes de la aplicación, mientras que las pruebas de aceptación implementadas con Cypress validan el funcionamiento del sistema desde la perspectiva del usuario final.

Los escenarios cubiertos incluyen aspectos relacionados con la navegación, la autenticación de usuarios, la visualización de información, la gestión de errores y las funcionalidades incorporadas durante el desarrollo del proyecto.

---

## Licencia

Repositorio publicado con fines exclusivamente académicos y docentes.

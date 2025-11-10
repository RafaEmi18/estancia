# Lista de Archivos a Eliminar

## 🗑️ Archivos a Eliminar (Confirmados)

### Archivos HTML Estáticos en `public/`
Estos archivos son versiones antiguas que han sido reemplazadas por componentes React:

- [ ] `public/informe-trimestral.html`
- [ ] `public/informe-trimestral.css`
- [ ] `public/informe-trimestral.js`
- [ ] `public/programa-anual-de-trabajo.html`
- [ ] `public/programa-anual-de-trabajo.css`
- [ ] `public/programa-anual-de-trabajo.js`
- [ ] `public/planeacion-cuatrimestral.html`
- [ ] `public/planeacion-cuatrimestral.css`
- [ ] `public/planeacion-cuatrimestral.js`

**Razón**: Existen componentes React funcionales que reemplazan estas versiones HTML estáticas. El sidebar debe usar React Router en lugar de redireccionar a HTML.

---

### Imágenes Duplicadas

#### En la raíz del proyecto:
- [ ] `lince.png` (raíz)
- [ ] `LogoUPTap.png` (raíz)

**Razón**: Las imágenes deben estar solo en `public/assets/images/` para ser servidas correctamente.

#### En `src/`:
- [ ] `src/lince.png`

**Razón**: Las imágenes estáticas no deben estar en `src/`. Deben estar en `public/` para ser accesibles.

**Acción**: Mover `public/lince.png` y `public/LogoUPTap.png` a `public/assets/images/` (crear la carpeta si no existe).

---

### Archivos CSS Duplicados en Componentes

#### En `src/components/PATForm/`:
- [ ] `src/components/PATForm/programa-anual-de-trabajo.css`

**Razón**: El componente ya usa `PATForm.scss`. Este archivo CSS es redundante.

#### En `src/components/PlaneacionCuatri/`:
- [ ] `src/components/PlaneacionCuatri/planeacion-cuatrimestral.css`

**Razón**: El componente ya usa `PlaneacionCuatri.scss`. Este archivo CSS es redundante.

#### En `src/components/InformeTrimestral/`:
- [ ] `src/components/InformeTrimestral/informe-trimestral.css`

**Razón**: El componente `InformeTrimestral.jsx` usa principalmente estilos inline (styled-jsx). Este archivo CSS no se importa ni se usa.

---

### Documentos No Utilizados

- [ ] `public/DP-RG.02 Informe Trimestral.docx`

**Razón**: Este es un documento de referencia que no se usa en el código. Si se necesita como referencia, mover a una carpeta `public/documents/` o eliminar si no es necesario.

---

## ⚠️ Archivos a Verificar Antes de Eliminar

### Archivos Referenciados pero No Existentes
Estos archivos son referenciados en `UniversityLayout.js` pero NO existen:

- `public/gestion-fondos.html` (referenciado en línea 221)
- `public/gestion-informacion.html` (referenciado en línea 230)

**Acción**: 
1. Si estos formularios no se necesitan, eliminar las referencias en `UniversityLayout.js`
2. Si se necesitan, crear los componentes React correspondientes

---

## 📋 Checklist de Eliminación

### Paso 1: Backup
- [ ] Crear backup del proyecto
- [ ] Crear rama git para los cambios: `git checkout -b cleanup/remove-unused-files`

### Paso 2: Eliminar Archivos HTML Estáticos
- [ ] Eliminar `public/informe-trimestral.html`
- [ ] Eliminar `public/informe-trimestral.css`
- [ ] Eliminar `public/informe-trimestral.js`
- [ ] Eliminar `public/programa-anual-de-trabajo.html`
- [ ] Eliminar `public/programa-anual-de-trabajo.css`
- [ ] Eliminar `public/programa-anual-de-trabajo.js`
- [ ] Eliminar `public/planeacion-cuatrimestral.html`
- [ ] Eliminar `public/planeacion-cuatrimestral.css`
- [ ] Eliminar `public/planeacion-cuatrimestral.js`

### Paso 3: Eliminar Imágenes Duplicadas
- [ ] Eliminar `lince.png` (raíz)
- [ ] Eliminar `LogoUPTap.png` (raíz)
- [ ] Eliminar `src/lince.png`
- [ ] Crear carpeta `public/assets/images/` si no existe
- [ ] Mover `public/lince.png` a `public/assets/images/lince.png`
- [ ] Mover `public/LogoUPTap.png` a `public/assets/images/LogoUPTap.png`
- [ ] Actualizar referencias en componentes:
  - [ ] `src/components/Login/Login.jsx` (línea 90)
  - [ ] `src/components/PATForm/PATForm.jsx` (línea 352)
  - [ ] `src/components/InformeTrimestral/InformeTrimestral.jsx` (línea 510)
  - [ ] `src/Dashboard.jsx` (línea 17)

### Paso 4: Eliminar Archivos CSS Duplicados
- [ ] Eliminar `src/components/PATForm/programa-anual-de-trabajo.css`
- [ ] Eliminar `src/components/PlaneacionCuatri/planeacion-cuatrimestral.css`
- [ ] Eliminar `src/components/InformeTrimestral/informe-trimestral.css`

### Paso 5: Manejar Documento DOCX
- [ ] Decidir si se necesita el documento como referencia
- [ ] Si se necesita: mover a `public/documents/DP-RG.02 Informe Trimestral.docx`
- [ ] Si no se necesita: eliminar

### Paso 6: Actualizar Código
- [ ] Actualizar `src/UniversityLayout.js` para usar React Router en lugar de `redirectToHTML()`
- [ ] Actualizar referencias de imágenes en componentes
- [ ] Verificar que todas las rutas funcionan correctamente

### Paso 7: Verificar
- [ ] Ejecutar `npm start` y verificar que la aplicación funciona
- [ ] Verificar que todas las rutas funcionan
- [ ] Verificar que las imágenes se cargan correctamente
- [ ] Verificar que los formularios funcionan
- [ ] Ejecutar `npm run build` y verificar que no hay errores

### Paso 8: Commit
- [ ] Hacer commit de los cambios: `git add . && git commit -m "Cleanup: Remove unused files and fix navigation"`
- [ ] Push a la rama: `git push origin cleanup/remove-unused-files`

---

## 🔧 Comandos Útiles

### Verificar qué archivos están siendo importados
```bash
# Buscar imports de archivos eliminados
grep -r "informe-trimestral.html" src/
grep -r "programa-anual-de-trabajo.html" src/
grep -r "planeacion-cuatrimestral.html" src/
```

### Verificar referencias de imágenes
```bash
# Buscar referencias a imágenes
grep -r "lince.png" src/
grep -r "LogoUPTap.png" src/
```

### Verificar archivos CSS importados
```bash
# Buscar imports de CSS
grep -r "programa-anual-de-trabajo.css" src/
grep -r "planeacion-cuatrimestral.css" src/
grep -r "informe-trimestral.css" src/
```

---

## 📊 Resumen

### Total de Archivos a Eliminar: **15 archivos**

- **HTML estáticos**: 3 archivos
- **CSS estáticos**: 3 archivos
- **JS estáticos**: 3 archivos
- **Imágenes duplicadas**: 3 archivos
- **CSS duplicados en componentes**: 3 archivos
- **Documentos no utilizados**: 1 archivo (opcional)

### Archivos a Mover: **2 archivos**

- `public/lince.png` → `public/assets/images/lince.png`
- `public/LogoUPTap.png` → `public/assets/images/LogoUPTap.png`

### Archivos a Actualizar: **5 archivos**

- `src/UniversityLayout.js` (cambiar navegación)
- `src/components/Login/Login.jsx` (actualizar ruta de imagen)
- `src/components/PATForm/PATForm.jsx` (actualizar ruta de imagen)
- `src/components/InformeTrimestral/InformeTrimestral.jsx` (actualizar ruta de imagen)
- `src/Dashboard.jsx` (actualizar ruta de imagen)

---

## ⚡ Quick Start

Si quieres eliminar todos los archivos de una vez (después de hacer backup):

```bash
# Eliminar archivos HTML estáticos
rm public/informe-trimestral.html
rm public/informe-trimestral.css
rm public/informe-trimestral.js
rm public/programa-anual-de-trabajo.html
rm public/programa-anual-de-trabajo.css
rm public/programa-anual-de-trabajo.js
rm public/planeacion-cuatrimestral.html
rm public/planeacion-cuatrimestral.css
rm public/planeacion-cuatrimestral.js

# Eliminar imágenes duplicadas
rm lince.png
rm LogoUPTap.png
rm src/lince.png

# Eliminar CSS duplicados
rm src/components/PATForm/programa-anual-de-trabajo.css
rm src/components/PlaneacionCuatri/planeacion-cuatrimestral.css
rm src/components/InformeTrimestral/informe-trimestral.css

# Crear estructura de assets
mkdir -p public/assets/images

# Mover imágenes a nueva ubicación
mv public/lince.png public/assets/images/
mv public/LogoUPTap.png public/assets/images/
```

**⚠️ IMPORTANTE**: Después de eliminar y mover archivos, actualizar las referencias en el código.


# Estructura Propuesta del Proyecto

## 📐 Estructura de Carpetas Detallada

```
estancia/
│
├── public/                                    # Archivos públicos (servidos estáticamente)
│   ├── favicon.ico
│   ├── index.html                            # Template HTML para React
│   ├── manifest.json                         # Configuración PWA
│   ├── robots.txt
│   └── assets/                               # Recursos estáticos organizados
│       ├── images/
│       │   ├── lince.png                     # Logo principal
│       │   └── LogoUPTap.png                 # Logo UPTap
│       └── icons/
│           ├── logo192.png                   # Icono PWA 192x192
│           └── logo512.png                   # Icono PWA 512x512
│
├── src/
│   │
│   ├── components/                           # Todos los componentes React
│   │   │
│   │   ├── common/                           # Componentes reutilizables comunes
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.scss
│   │   │   │   └── index.js
│   │   │   ├── Input/
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Input.module.scss
│   │   │   │   └── index.js
│   │   │   ├── LoadingSpinner/
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   ├── LoadingSpinner.module.scss
│   │   │   │   └── index.js
│   │   │   └── Modal/
│   │   │       ├── Modal.jsx
│   │   │       ├── Modal.module.scss
│   │   │       └── index.js
│   │   │
│   │   ├── layout/                           # Componentes de layout
│   │   │   ├── UniversityLayout/
│   │   │   │   ├── UniversityLayout.jsx
│   │   │   │   ├── UniversityLayout.module.scss
│   │   │   │   └── index.js
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Sidebar.module.scss
│   │   │   │   ├── menuItems.js              # Configuración del menú
│   │   │   │   └── index.js
│   │   │   └── Header/
│   │   │       ├── Header.jsx
│   │   │       ├── Header.module.scss
│   │   │       └── index.js
│   │   │
│   │   ├── auth/                             # Autenticación
│   │   │   ├── Login/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Login.module.scss
│   │   │   │   └── index.js
│   │   │   └── PrivateRoute/
│   │   │       ├── PrivateRoute.jsx
│   │   │       └── index.js
│   │   │
│   │   ├── forms/                            # Formularios del sistema
│   │   │   ├── InformeTrimestral/
│   │   │   │   ├── InformeTrimestral.jsx
│   │   │   │   ├── InformeTrimestral.module.scss
│   │   │   │   ├── components/               # Sub-componentes del formulario
│   │   │   │   │   ├── ActionRow/
│   │   │   │   │   │   ├── ActionRow.jsx
│   │   │   │   │   │   └── ActionRow.module.scss
│   │   │   │   │   └── SignatureSection/
│   │   │   │   │       ├── SignatureSection.jsx
│   │   │   │   │       └── SignatureSection.module.scss
│   │   │   │   ├── hooks/                    # Hooks específicos del formulario
│   │   │   │   │   └── useInformeTrimestral.js
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── PATForm/
│   │   │   │   ├── PATForm.jsx
│   │   │   │   ├── PATForm.module.scss
│   │   │   │   ├── components/
│   │   │   │   │   ├── GeneralData/
│   │   │   │   │   │   ├── GeneralData.jsx
│   │   │   │   │   │   └── GeneralData.module.scss
│   │   │   │   │   └── ActionsTable/
│   │   │   │   │       ├── ActionsTable.jsx
│   │   │   │   │       └── ActionsTable.module.scss
│   │   │   │   ├── hooks/
│   │   │   │   │   └── usePATForm.js
│   │   │   │   └── index.js
│   │   │   │
│   │   │   └── PlaneacionCuatri/
│   │   │       ├── PlaneacionCuatri.jsx
│   │   │       ├── PlaneacionCuatri.module.scss
│   │   │       ├── components/
│   │   │       │   ├── ActivityRow/
│   │   │       │   │   ├── ActivityRow.jsx
│   │   │       │   │   └── ActivityRow.module.scss
│   │   │       │   └── FileUpload/
│   │   │       │       ├── FileUpload.jsx
│   │   │       │       └── FileUpload.module.scss
│   │   │       ├── hooks/
│   │   │       │   └── usePlaneacionCuatri.js
│   │   │       └── index.js
│   │   │
│   │   └── dashboard/                        # Dashboard principal
│   │       ├── Dashboard.jsx
│   │       ├── Dashboard.module.scss
│   │       └── index.js
│   │
│   ├── routes/                               # Configuración de rutas
│   │   ├── AppRoutes.jsx
│   │   ├── UniversityRoutes.jsx
│   │   ├── routePaths.js                     # Constantes de rutas
│   │   └── index.js
│   │
│   ├── styles/                               # Estilos globales
│   │   ├── index.css                         # Estilos base
│   │   ├── variables.scss                    # Variables SCSS (colores, fuentes, etc.)
│   │   ├── mixins.scss                       # Mixins SCSS reutilizables
│   │   └── reset.css                         # Reset CSS (opcional)
│   │
│   ├── utils/                                # Funciones utilitarias
│   │   ├── auth.js                           # Utilidades de autenticación
│   │   ├── validation.js                     # Validaciones de formularios
│   │   ├── pdfGenerator.js                   # Generación de PDFs
│   │   ├── dateFormatter.js                  # Formateo de fechas
│   │   └── constants.js                      # Constantes de la aplicación
│   │
│   ├── hooks/                                # Custom hooks
│   │   ├── useAuth.js                        # Hook de autenticación
│   │   ├── useForm.js                        # Hook para manejo de formularios
│   │   └── useLocalStorage.js                # Hook para localStorage
│   │
│   ├── context/                              # Context API
│   │   ├── AuthContext.jsx                   # Contexto de autenticación
│   │   └── AppContext.jsx                    # Contexto general (opcional)
│   │
│   ├── services/                             # Servicios/API (futuro)
│   │   ├── api.js                            # Configuración de API
│   │   └── formService.js                    # Servicios de formularios
│   │
│   ├── App.jsx                               # Componente raíz
│   ├── App.css                               # Estilos del componente App
│   └── index.js                              # Punto de entrada
│
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── ANALISIS_PROYECTO.md                      # Este análisis
```

---

## 🎨 Convenciones de Nomenclatura

### Archivos y Carpetas
- **Componentes**: PascalCase (`Login.jsx`, `InformeTrimestral.jsx`)
- **Hooks**: camelCase con prefijo `use` (`useAuth.js`, `useForm.js`)
- **Utilidades**: camelCase (`auth.js`, `validation.js`)
- **Estilos**: `ComponentName.module.scss` para CSS Modules
- **Constantes**: UPPER_SNAKE_CASE en archivos de constantes

### Estructura de Componentes
Cada componente debe tener su propia carpeta con:
```
ComponentName/
├── ComponentName.jsx          # Componente principal
├── ComponentName.module.scss  # Estilos del componente
├── index.js                   # Exportación del componente
└── (opcional) components/     # Sub-componentes
```

---

## 🔄 Plan de Migración

### Paso 1: Preparación
1. Crear backup del proyecto actual
2. Crear rama `refactor/estructura` en git
3. Revisar y aprobar cambios propuestos

### Paso 2: Limpieza de Archivos
1. Eliminar archivos HTML estáticos de `public/`
2. Eliminar archivos CSS/JS asociados
3. Eliminar imágenes duplicadas
4. Eliminar archivos CSS duplicados en componentes

### Paso 3: Reorganización de Carpetas
1. Crear nueva estructura de carpetas
2. Mover archivos a sus nuevas ubicaciones
3. Actualizar imports en todos los archivos

### Paso 4: Refactorización de Código
1. Actualizar `UniversityLayout.js` para usar React Router
2. Convertir estilos a CSS Modules
3. Extraer lógica a custom hooks
4. Crear componentes reutilizables

### Paso 5: Testing
1. Verificar que todas las rutas funcionan
2. Verificar que los formularios funcionan
3. Verificar que la autenticación funciona
4. Probar en diferentes navegadores

### Paso 6: Documentación
1. Actualizar README.md
2. Documentar nueva estructura
3. Documentar convenciones de código

---

## 📦 Archivos a Crear/Mover

### Nuevos Archivos
- `src/routes/routePaths.js` - Constantes de rutas
- `src/styles/variables.scss` - Variables SCSS globales
- `src/styles/mixins.scss` - Mixins SCSS
- `src/utils/constants.js` - Constantes de la app
- `src/hooks/useAuth.js` - Hook de autenticación
- `src/context/AuthContext.jsx` - Contexto de autenticación

### Archivos a Mover
- `src/UniversityLayout.js` → `src/components/layout/UniversityLayout/UniversityLayout.jsx`
- `src/Dashboard.jsx` → `src/components/dashboard/Dashboard.jsx`
- `src/AppRoutes.js` → `src/routes/AppRoutes.jsx`
- `src/UniversityRoutes.js` → `src/routes/UniversityRoutes.jsx`
- Componentes de formularios a `src/components/forms/`

### Archivos a Eliminar
- Todos los archivos HTML estáticos de `public/`
- Archivos CSS/JS asociados a HTML estáticos
- Imágenes duplicadas
- Archivos CSS duplicados en componentes

---

## 🎯 Beneficios de la Nueva Estructura

1. **Organización Clara**: Fácil de navegar y entender
2. **Escalabilidad**: Fácil agregar nuevos componentes y funcionalidades
3. **Mantenibilidad**: Código más fácil de mantener y actualizar
4. **Reutilización**: Componentes y utilidades más fáciles de reutilizar
5. **Separación de Concerns**: Lógica, presentación y estilos separados
6. **Testing**: Más fácil de testear con estructura clara
7. **Colaboración**: Más fácil para nuevos desarrolladores entender el proyecto

---

## ⚠️ Consideraciones Importantes

1. **Backward Compatibility**: Algunos cambios pueden requerir actualización de imports
2. **Build Process**: Verificar que el build sigue funcionando correctamente
3. **Dependencies**: Asegurarse de que todas las dependencias están instaladas
4. **Environment Variables**: Verificar que las variables de entorno siguen funcionando
5. **Deployment**: Verificar que el proceso de deployment sigue funcionando

---

## 📚 Recursos Adicionales

- [React Folder Structure Best Practices](https://reactjs.org/docs/faq-structure.html)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [React Router Documentation](https://reactrouter.com/)
- [SCSS Documentation](https://sass-lang.com/documentation)


# Script para limpiar archivos innecesarios del proyecto
# Ejecutar desde la raíz del proyecto

Write-Host "=== Iniciando limpieza del proyecto ===" -ForegroundColor Cyan
Write-Host ""

$archivosAEliminar = @(
    # Archivos de prueba
    "src\App.test.js",
    "src\setupTests.js",
    
    # Archivos sin uso
    "src\Routes.js",
    "src\reportWebVitals.js",
    "src\logo.svg",
    
    # Archivos HTML/JS antiguos en componentes
    "src\components\InformeTrimestral\informe-trimestral.html",
    "src\components\InformeTrimestral\informe-trimestral.js",
    "src\components\PATForm\programa-anual-de-trabajo.html",
    "src\components\PATForm\programa-anual-de-trabajo.js",
    "src\components\PlaneacionCuatri\planeacion-cuatrimestral.html",
    "src\components\PlaneacionCuatri\planeacion-cuatrimestral.js",
    
    # Imágenes duplicadas
    "src\components\InformeTrimestral\lince.png",
    "src\components\PATForm\lince.png",
    "src\components\PlaneacionCuatri\lince.png",
    
    # Documentos temporales
    "inform-trimestral.docx",
    "WARP.md"
)

$eliminados = 0
$noEncontrados = 0

foreach ($archivo in $archivosAEliminar) {
    if (Test-Path $archivo) {
        Remove-Item $archivo -Force
        Write-Host "[OK] Eliminado: $archivo" -ForegroundColor Green
        $eliminados++
    }
    else {
        Write-Host "[!] No encontrado: $archivo" -ForegroundColor Yellow
        $noEncontrados++
    }
}

Write-Host ""
Write-Host "=== Resumen ===" -ForegroundColor Cyan
Write-Host "Archivos eliminados: $eliminados" -ForegroundColor Green
Write-Host "Archivos no encontrados: $noEncontrados" -ForegroundColor Yellow
Write-Host ""
Write-Host "Limpieza completada!" -ForegroundColor Green

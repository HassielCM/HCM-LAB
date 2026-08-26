from pathlib import Path
import re

# Toma el directorio base del proyecto
BASE_DIR = Path(__file__).resolve().parent.parent

PROMPT_INICIO = BASE_DIR / "Docs" / "Prompts" / "prompt_inicio.txt"
CARPETA_DIAS = BASE_DIR / "Docs" / "Diario"
SALIDA = BASE_DIR / "Docs" / "bitacora_integrada.txt"


def obtener_numero_dia(ruta: Path) -> int:
    """
    Extrae el número de archivos de día del nombre del archivo. Si no se encuentra un número, devuelve 999999.
    """

    # Buscar un patrón que coincida con "Dia" seguido de un número, ignorando mayúsculas y minúsculas
    coincidencia = re.search(r"Dia[_-](\d+)", ruta.stem, re.IGNORECASE)

    if coincidencia:
        return int(coincidencia.group(1))

    return 999999


def leer_archivo(ruta: Path) -> str:
    # utf-8 sirve para leer archivos de texto con caracteres especiales, como acentos y eñes.
    return ruta.read_text(encoding="utf-8").strip()


def main():
    prompt = leer_archivo(PROMPT_INICIO)

    archivos_dias = [
        archivo
        for archivo in CARPETA_DIAS.iterdir()
        if archivo.suffix.lower() in {".md", ".txt"}
    ]

    # Ordenar los archivos de día por el número de día extraído del nombre del archivo.
    archivos_dias.sort(key=obtener_numero_dia)

    partes = []

    # Prompt que explica al asistente cómo interpretar las bitácoras.
    partes.append(prompt)

    partes.append(
        "\n\n"
        "============================================================\n"
        "BITÁCORAS DE HCM_LAB\n"
        "============================================================"
    )

    for archivo in archivos_dias:
        contenido = leer_archivo(archivo)

        partes.append(
            f"\n\n"
            f"============================================================\n"
            f"FUENTE: {archivo.name}\n"
            f"============================================================\n"
            f"{contenido}"
        )

    resultado = "\n".join(partes)

    SALIDA.write_text(resultado, encoding="utf-8")

    print(f"Bitácora integrada creada: {SALIDA}")
    print(f"Días integrados: {len(archivos_dias)}")


if __name__ == "__main__":
    main()
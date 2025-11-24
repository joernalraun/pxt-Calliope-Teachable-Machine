// Als Dropdown darstellbar (Calliope unterstützt nur Enums)
enum ClassName {
    //% block="Klasse 1"
    Klasse1,
    //% block="Klasse 2"
    Klasse2,
    //% block="Klasse 3"
    Klasse3
}

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

    /**
     * Reporterblock mit ENUM-Dropdown, gibt aber STRING zurück.
     */
    //% block="Klasse: %klasse"
    export function klasse(klasse: ClassName): string {
        // ENUM → STRING wandeln
        return ClassName[klasse];
    }
}

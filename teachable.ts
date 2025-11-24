enum DynamicClassEnum {
    // Wird dynamisch überschrieben
    Anzeige
}

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

    // Reporterblock mit ENUM-Dropdown
    // Dropdown wird nach dem Neugenerieren korrekt angezeigt
    //% block="Klasse: %klasse"
    export function klasse(klasse: DynamicClassEnum): string {
        return DynamicClassEnum[klasse];
    }
}

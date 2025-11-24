// Dynamische Klassenliste mit Fallback
let dynamicClasses: string[] = ["Klasse 1", "Klasse 2", "Klasse 3"];

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

    /**
     * Aufzurufende Funktion
     * 
     */
    //% blockHidden=true
    export function setClasses(list: string[]): void {
        if (list && list.length) {
            dynamicClasses = list;
        } else {
            // falls leer übergeben wird, bleib beim Fallback
            dynamicClasses = ["Klasse 1", "Klasse 2", "Klasse 3"];
        }
    }

    /**
     * MakeCode holt sich hier die Dropdown-Optionen.
     * Rückgabe als Array von [Text, Wert]-Pairs!
     */
    //% blockHidden=true
    export function classes(): string[][] {
        // Falls dynamicClasses aus irgendeinem Grund leer ist -> Fallback
        if (!dynamicClasses || !dynamicClasses.length) {
            dynamicClasses = ["Klasse 1", "Klasse 2", "Klasse 3"];
        }
        return dynamicClasses.map(c => [c, c]);
    }

    /**
     * Runder Reporter-Block
     */
    //% block="Klasse: %klasse"
    //% blockId=teachable_class_value
    //% klasse.fieldEditor="dropdown"
    //% klasse.fieldOptions.values="teachable.classes"
    //% klasse.fieldOptions.decompileLiterals=true
    //% klasse.defl="Klasse 1"
    export function klasse(klasse: string): string {
        return klasse;
    }
}

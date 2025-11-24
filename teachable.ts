// Dynamischer Fallback
let dynamicClasses: string[] = ["Klasse 1", "Klasse 2", "Klasse 3"];

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

    // Wird extern aufgerufen
    //% blockHidden=true
    export function setClasses(list: string[]): void {
        if (list && list.length > 0) {
            dynamicClasses = list;
        } else {
            dynamicClasses = ["Klasse 1", "Klasse 2", "Klasse 3"];
        }
    }

    // Dynamic dropdown generator: MUSS immer Werte liefern
    //% blockHidden=true
    export function classOptions(): [string, string][] {
        if (!dynamicClasses || dynamicClasses.length === 0) {
            dynamicClasses = ["Klasse 1", "Klasse 2", "Klasse 3"];
        }
        return dynamicClasses.map(c => [c, c]);
    }

    /**
     * Runder Reporterblock mit sicherem Fallback
     */
    //% block="Klasse: %value"
    //% value.fieldEditor="dropdown"
    //% value.fieldOptions.options="teachable.classOptions"
    //% value.shadow="dropdown"
    //% value.defl="Klasse 1"
    export function klasse(value: string): string {
        return value;
    }
}

// Globale Klassenliste als CSV (funktioniert garantiert in Calliope MakeCode)
let dynamicClassList = "Klasse 1,Klasse 2,Klasse 3";

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

    // Wird von außen aufgerufen
    //% blockHidden=true
    export function setClasses(list: string[]): void {
        if (list && list.length > 0) {
            dynamicClassList = list.join(",");
        } else {
            dynamicClassList = "Klasse 1,Klasse 2,Klasse 3";
        }
    }

    /**
     * Custom Dropdown-Editor.
     * MakeCode verwendet das CSV und erzeugt automatisch ein Dropdown.
     */
    //% block="Klasse: %value"
    //% value.fieldEditor="stringdropdown"
    //% value.fieldOptions.data="dynamicClassList"
    //% value.defl="Klasse 1"
    export function klasse(value: string): string {
        return value;
    }
}

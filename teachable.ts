// String-Dropdown für Klassen
// (statt Enum, damit echte Textwerte zurückgegeben werden)

//% blockNamespace=teachable
//% color=#BBEF53
namespace teachable {

    /**
     * Runder Wertblock mit String-Dropdown.
     */
    //% block="Klasse: %klasse"
    //% blockId=teachable_class_value
    //% blockHidden=false
    //% klasse.defl="Klasse 1"
    //% klasse.shadow="dropdown"
    //% klasse.options="Klasse 1,Klasse 2,Klasse 3"
    export function klasse(klasse: string): string {
        return klasse;
    }
}

// Enum für gemeinsame Klassenliste
// Die Werte können später programmgesteuert überschrieben werden.
// Aktuell statisch: Klasse 1–3

enum ClassName {
//% block="Klasse 1"
Klasse1 = 1,
//% block="Klasse 2"
Klasse2 = 2,
//% block="Klasse 3"
Klasse3 = 3
}

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

/**
* Runder Wertblock mit Dropdown für Klassen
*/
//% block="Klasse"
//% blockId=teachable_class_value
//% blockNamespace=teachable
//% shim=TD_ID
//% blockHidden=false
//% blockCombine
export function ClassName {
return klasse;
}
}

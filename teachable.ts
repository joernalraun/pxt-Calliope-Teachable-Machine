// Enum für gemeinsame Klassenliste
// Die Werte können später programmgesteuert überschrieben werden.
// Aktuell statisch: Klasse 1–3
//% blockNamespace=teachable
//% color=#BBEF53
//% blockGap=16

enum ClassName {
//% block="Klasse 1"
Klasse1 = 1,
//% block="Klasse 2"
Klasse2 = 2,
//% block="Klasse 3"
Klasse3 = 3
}

//% blockNamespace=teachable
//% color=#BBEF53
namespace teachable {

/**
* Runder Wertblock mit Dropdown für Klassen
*/
//% block="Klasse"
//% blockId=teachable_class_value
//% blockNamespace=teachable
//% shim=TD_ID
//% blockHidden=false
//% blockSetVariable="klasse"
//% blockCombine
export function classValue(klasse: ClassName): ClassName {
return klasse;
}
}

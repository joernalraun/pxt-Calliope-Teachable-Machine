// Enum für gemeinsame Klassenliste
// beide Blöcke nutzen dieselbe Dropdown-Quelle)
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
* Hauptblock: "Übergebene Klasse {Dropdown}"
*/
//% block="Klasse %klasse"
//% klasse.defl=ClassName.Klasse1
export function uebergebeneKlasse(klasse: ClassName): void {
// Der Block macht aktuell nichts
}

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
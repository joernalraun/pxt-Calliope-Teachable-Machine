// Enum für gemeinsame Klassenliste
// Die Werte können später programmgesteuert überschrieben werden.
// Aktuell statisch: Klasse 1–3

enum ClassName {
//% block="Klasse 1"
Klasse1 = "Klasse1",
//% block="Klasse 2"
Klasse2 = "Klasse2",
//% block="Klasse 3"
Klasse3 = "Klasse3"
}

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

/**
* Runder Wertblock nur mit Dropdown.
* Der Block zeigt *nur* die Klassen-Auswahlliste an.
*/
//% block="Klasse: %klasse"
//% blockId=teachable_class_value
//% klasse.defl=ClassName.Klasse1
//% blockHidden=false
export function klasse(klasse: ClassName): ClassName {
return klasse;
}
}

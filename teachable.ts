// Dynamisch befüllbares Dropdown für Klassen
// Die Liste wird über JavaScript von außen aktualisiert.

let dynamicClasses: string[] = ["Klasse 1", "Klasse 2", "Klasse 3"]; // Fallback

// Diese Funktion kann von der eingebetteten Webseite aus aufgerufen werden:
// Beispiel: window.makecodeExtension.setClasses(["Hund", "Katze", "Vogel"])
// Dadurch erscheint das neue Dropdown sofort im Editor.
//% shim=teachable::setClasses
function setClasses(list: string[]): void {
dynamicClasses = list;
}

//% blockNamespace=teachable
//% color=#BBEF53
namespace teachable {

/**
* Wird von außen (z. B. per IFrame-Integration) aufgerufen,
* um die Liste der Klassen dynamisch zu setzen.
*/
//% blockHidden=true
export function setClasses(list: string[]): void {
dynamicClasses = list;
}

/**
* Dropdown-Klassenblock (Reporter-Block)
* Gibt die dynamisch gesetzte Klasse als String zurück.
*/
//% block="Klasse: %klasse"
//% blockId=teachable_dynamic_class
//% blockHidden=false
export function klasse(klasse: string): string {
return klasse;
}

/**
* Erzeugt das Dropdown dynamisch.
* MakeCode fragt diese Funktion ab, um die Optionsliste zu erstellen.
*/
//% blockId=teachable_dynamic_class_dropdown
//% shim=TD_ID
export function __classesDropdown(): string[] {
return dynamicClasses;
}
}// Dynamisch befüllbares Dropdown für Klassen
// Die Liste wird über JavaScript von außen aktualisiert.

let dynamicClasses: string[] = ["Klasse 1", "Klasse 2", "Klasse 3"]; // Fallback

// Diese Funktion kann von der eingebetteten Webseite aus aufgerufen werden:
// Beispiel: window.makecodeExtension.setClasses(["Hund", "Katze", "Vogel"])
// Dadurch erscheint das neue Dropdown sofort im Editor.
//% shim=teachable::setClasses
function setClasses(list: string[]): void {
dynamicClasses = list;
}

//% blockNamespace=teachable
//% color=#9ab5bd
namespace teachable {

/**
* Wird von außen (z. B. per IFrame-Integration) aufgerufen,
* um die Liste der Klassen dynamisch zu setzen.
*/
//% blockHidden=true
export function setClasses(list: string[]): void {
dynamicClasses = list;
}

/**
* Dropdown-Klassenblock (Reporter-Block)
* Gibt die dynamisch gesetzte Klasse als String zurück.
*/
//% block="Klasse: %klasse"
//% blockId=teachable_dynamic_class
//% blockHidden=false
export function klasse(klasse: string): string {
return klasse;
}

/**
* Erzeugt das Dropdown dynamisch.
* MakeCode fragt diese Funktion ab, um die Optionsliste zu erstellen.
*/
//% blockId=teachable_dynamic_class_dropdown
//% shim=TD_ID
export function __classesDropdown(): string[] {
return dynamicClasses;
}
}

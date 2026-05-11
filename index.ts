// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi principali sono: string, number, boolean, null, undefined

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const nome: string = "Michelangelo"
const eta: number = 23;
const stoStudiando: boolean = true

// 3) Tipizza il parametro della seguente funzione:
const greet = (name: string) => { return "Ciao " + name }

// 4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number): number => { return a + b }

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calcolaIVA = (prezzo: number): number => {
    return prezzo * 1.22;
}

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const lunghezzaConcatenata = (s1: string, s2: string): number => {
    return (s1 + s2).length;
}

// 7) Cos'è un Type Union e come si scrive?
// Un Type Union permette a una variabile di contenere più tipi diversi. Si scrive usando : |
let valore: string | number

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let datoVariabile: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica"

// 10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
let miaTupla: [string, string, string, number, number] = ["a", "b", "c", 1, 2]

// 12) Qual è la differenza tra type e interface?
// Le interfacce sono estensibili (possono essere riaperte per aggiungere proprietà), mentre i type non possono essere cambiati dopo la creazione. 
// Le interfacce sono usate principalmente per definire la forma degli oggetti, i type sono più flessibili (union, alias di primitivi, ecc.).

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Persona {
    firstname: string
    lastname: string
    age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Utente {
    email: string
    telefono?: string
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
    nome: string
    voto: number
}
const classe: Studente[] = [
    { nome: "Mario", voto: 28 },
    { nome: "Anna", voto: 30 }
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
    marca: string;
    anno: number;
}

interface Auto extends Veicolo {
    modello: string;
    porte: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto: Auto = {
    marca: "Fiat",
    anno: 2022,
    modello: "500",
    porte: 3
};

// 18) Cosa sono i Generics in TypeScript?
// I Generics permettono di creare componenti riutilizzabili che lavorano con diversi tipi anziché con uno solo

// 19) È possibile avere più tipi generici in un'interfaccia?
// Sì, è possibile specificare più parametri generici separati da virgole

// 20) Crea un'interfaccia generica per una risposta API.
interface RispostaAPI<T> {
    data: T;
    status: number;
    success: boolean;
}
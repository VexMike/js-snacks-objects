console.log('JS Snacks 4 Object');

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

// Creo un array di oggetti con:
// - Nome
// - Cognome
// - Età

const utenti = [
    {
        nome: 'Aiden',
        cognome: 'Fireheart',
        età: 26
    },
    {
        nome: 'Elora',
        cognome: 'Whisperwood',
        età: 14
    },
    {
        nome: 'Evander',
        cognome: 'Nightgale',
        età: 34
    },
    {
        nome: 'Maeve',
        cognome: 'Skyborn',
        età: 8
    },
    {
        nome: 'Rowan',
        cognome: 'Everleigh',
        età: 62
    },
    {
        nome: 'Zephyr',
        cognome: 'Dreamcatcher',
        età: 5
    }
]

// Stampo per verifica array
console.log(utenti);

// Creo nuovo array

const puoiGuidare = []; // Array vuoto

// Creo ciclo per verificare se l'utente è < 18 o >= 18

for (i = 0; i < utenti.length; i++) {
    const utente = utenti[i];
    const anni = parseInt(utente.età) // Number
}


console.log('JS Snacks Object');

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// Crea un nuovo array con la lista dei mammiferi.
// [
//  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]

// Lista di animali preistorici

const animali = [
    {
        nome: 'Mammut',
        famiglia: 'Elefantidi',
        classe: 'Mammifero'
    },
    {
        nome: 'Tirannosauro Rex',
        famiglia: 'Tirannosauridae',
        classe: 'Dinosauro teropode'
    },
    {
        nome: 'Triceratopo',
        famiglia: 'Ceratopsidae',
        classe: 'Dinosauro ceratopside'
    },
    {
        nome: 'Stegosauro',
        famiglia: 'Stegosauridae',
        classe: 'Dinosauro ornitopode'
    },
    {
        nome: 'Bradipo gigante',
        famiglia: 'Megatheriidae',
        classe: 'Mammifero'
    },
    {
        nome: 'Megalodonte',
        famiglia: 'Otodontidae',
        classe: 'Squalo'
    },
    {
        nome: 'Smilodonte',
        famiglia: 'Felidae',
        classe: 'Mammifero'
    },
    {
        nome: 'Pterosauro',
        famiglia: 'Pterodattili',
        classe: 'Rettile volante'
    },
    {
        nome: 'Doedicurus',
        famiglia: 'Glyptodontidae',
        classe: 'Mammifero'
    },
    {
        nome: 'Mosasauro',
        famiglia: 'Mosasauridae',
        classe: 'Rettile marino'
    },
    {
        nome:'Orso delle caverne',
        famiglia:'Ursus spelaeus',
        classe:'Mammifero'
    },
    {
        nome: 'Ittiosauro',
        famiglia: 'Ichthyosauridae',
        classe: 'Rettile marino'
    }
]

// console.log(animali);

const mammiferi = [];

for (let i = 0; i < animali.length; i++) {
    const classeAnimali = animali[i];
    
    console.log(classeAnimali);

    if (classeAnimali.classe === 'Mammifero') {
        mammiferi.push(classeAnimali);
        
    }
}

console.log(mammiferi);
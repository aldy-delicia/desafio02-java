let ingreso;
const menu = [
    {   
        id:1,
        dia:1,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },

    {
        id:2,
        dia:2,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },

    {
        id:3,
        dia:3,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },

    {
        id:4,
        dia:4,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },
 
    {
        id:5,
        dia:5,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },

    {
        id:6,
        dia:6,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },

    {
        id:7,
        dia:7,
        comida: "lo que consumimos",
        horario: "agregar",
        actividadfisica: "responder si o no"

    },

   

];

const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
];


while (ingreso !== 0) {
    ingreso = Number ( prompt ( 'ingrese una opcion: \n1. agregar registro \n2. ver registros \n0.salir'));

    switch (ingreso) {
        case 1:
               const dia = Number( prompt('ingrese el dia de la semana,para agregar el registro:\n 1.lunes \n 2.martes \n 3.miercoles \n 4.jueves \n 5.viernes \n 6.sabado \n 7.domingo'));
               const comida = prompt ('ingrese su comida');
               const horario = Number (prompt ('ingrese el horario: \n 1.desayuno \n 2.almuerzo \n 3.merienda \n 4.cena \n 5.colacion'));
               const id = getLastID() + 1;
               registros ( id, dia, comida, horario, actividadfisica);
               
            break;

        case 2: 
               
               semanal ();
               

               break; 

        case 0:
               alert ('Gracias, te esperamos pronto');

               break;
    
        default:
               alert ('Esta no es una opcion valida');
            break;
    }
}

function registros( id, dia, comida, horario, actividadfisica) {
 
    anotaciones.push ( {
        id,
        dia,
        comida,
        horario,
        actividadfisica,

    });
    
}

function getLastID() {
    return registros.length;
}

function semanal () {
    console.log ('\n--------------------');
    anotaciones.forEach((comida) => console.log(comida.id + "-" + dia [comida.dia - 1]+ "-" + comida.horario))
    
        
    }


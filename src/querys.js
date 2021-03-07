//Ingresados con idendificador mayor a 7, y su grupo sanguineo sea A
db.ingresados.find(
    {
        _id: { $gt: 7 },
        $or: [{ gr_sang_rh: "A+" }, { gr_sang_rh: "A-" }]
    },
    {
        _id: 0,
        nombre: 1,
        gr_sang_rh: 1
    }
);

//Empleados no en prácticas, con sueldo entre 1100 y 2000 
//y que sean auxiliares
db.empleados.find(
    {
        $and: [
            { sueldo: { $exists: true } },
            { sueldo: { $gte: 1100, $lte: 2020 } },
            { cargo: { $regex: /auxiliar/i } }
        ]
    },
    {
        _id: 0,
        nombre: 1,
        cargo: 1,
        sueldo: 1
    }
);


//Empleados en prácticas
db.empleados.find(
    {
        $and: [
            { sueldo: { $exists: false } },
            { cargo: { $regex: /practicas/ } }
        ]
    },
    {
        _id: 0,
        nombre: 1,
        cargo: 1
    }
);


//Ambulancias con todos estos materiales independientemente del orden
db.vehiculos.find(
    {
        equipo: { $all: ["Catopril", "Ecógrafo portátil", "Metilprednisolona"] }
    },
    {
        _id: 1,
        equipo: 1
    }
);


//Ingresados por alguna fractura entre 2000 y 2015
db.ingresados.find(
    {
        diagnostico: { $regex: /fractura/i },
        $and: [
            { fec_ing: { $gte: new Date("2015-01-01T00:00:00.000Z") } },
            { fec_ing: { $lte: new Date("2020-12-30T00:00:00.000Z") } }
        ]
    },
    {
        _id: 0,
        nombre: 1,
        diagnostico: 1
    }
);

//Nombre, edad, contacto y grupo sanguíneo y RH de el/los paciente/s con
//complicaciones del apéndice de la planta 3
db.ingresados.find(
    {
        diagnostico: { $regex: /apendi/i },
        habitacion: { $gte: 300, $lte: 399 }
    },
    {
        _id: 0,
        nombre: 1,
        ed: 1,
        gr_sang_rh: 1,
        id_cont: 1
    }
);

//UTILIZACIÓN DE VARIABLES E INTERCONEXIÓN DE COLECCIONES
var emp = null;
var emp = db.empleados.findOne({ cargo: "Medico general" });
var med = null;
if (emp._id = { $or: [12, 13] }) {
    var med = [12, 13];
    var nomed = empleado.nombre
};
db.ingresados.find(
    {
        $or: [{ id_med: 12 }, { id_med: 13 }]
    },
    {
        _id: 0,
        nombre: 1,
        id_med: 1,
        nomed: 1
    }
);














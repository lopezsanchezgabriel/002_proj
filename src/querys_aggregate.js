//Nombre completo, fecha contratacion y titulo de empleados cuyo pago extra sea mayor de 120 (2)
db.ingresados.aggregate([
    {
        $project: {
            from: 'cargos',
            localField: 'cargo',
            foreignField: '_id',
            as: 'empleo'
        }
    },
    {
        $match: {
            $expr: {
                $gt: ['$sueldo_ex', 120]
            }
        }
    },
    {
        $project: {
            nombre: 1,
            apellidos: 1,
            fec_cont: 1,
            sueldo_ex: 1
        }
    }
])

//Mostrar la información relevante por cada paciente
db.ingresados.aggregate([
    {
        $lookup: {
            from: 'contactos',
            localField: 'id_cont',
            foreignField: '_id',
            as: 'inf_contac'
        }
    },
    {
        $lookup: {
            from: 'empleados',
            localField: 'id_med',
            foreignField: '_id',
            as: 'inf_med'
        }
    },
    {
        $project: {
            nombre: 1,
            apellidos: 1,
            fec_nac: 1,
            gr_sang_rh: 1,
            fec_ing: 1,
            habitacion: 1,
            diagnostico: 1,
            'inf_contac.nombre': 1,
            'inf_contac.apellidos': 1,
            'inf_contac.telf': 1,
            'inf_med.nombre': 1,
            'inf_med.cargo': 1,
            'inf_med.telf': 1
        }
    },
    {
        $unwind: '$inf_contac'
    },
    {
        $unwind: '$inf_med'
    },
    {
        $lookup: {
            from: 'cargos',
            localField: 'inf_med.cargo',
            foreignField: '_id',
            as: 'inf_med.cargo'
        }
    },
    {
        $unwind: '$inf_med.cargo'
    },
    {
        $project: {
            nombre: 1,
            apellidos: 1,
            fec_nac: 1,
            gr_sang_rh: 1,
            fec_ing: 1,
            habitacion: 1,
            diagnostico: 1,
            'inf_contac.nombre': 1,
            'inf_contac.apellidos': 1,
            'inf_contac.telf': 1,
            'inf_med.nombre': 1,
            'inf_med.cargo.titulo': 1,
            'inf_med.telf': 1
        }
    }
]).pretty()


//Para los médicos mostrar la información de sus pacientes receptores 
//sanguineos universales (AB+) y sus respectivos contactos (1+2)
db.empleados.aggregate([
    {
        $lookup: {
            from: 'cargos',
            localField: 'cargo',
            foreignField: '_id',
            as: 'cargo'
        }
    },
    {
        $unwind: '$cargo'
    },
    {
        $project: {
            _id:1,
            nombre:1,
            apellidos:1,
            telf:1,
            'cargo.titulo':1
          }
    },
    {
        $match: {
            'cargo.titulo': 'Medico general'
          }
    },
    {
        $lookup: {
            from: 'ingresados',
            localField: '_id',
            foreignField: 'id_med',
            as: 'pacientes'
          }
    },
    {
        $unwind: '$pacientes'
    },
    {
        $match: {
            'pacientes.gr_sang_rh': 'AB+'
          }
    },
    {
        $group:{
            _id: {
              nombre:'$nombre', 
              apellidos:'$apellidos', 
              telf:'$telf'
              
            },
            pacientes: {
              $push: '$pacientes'
            }
          }
    },
    {
        $unwind: '$pacientes'
    },
    {
        $lookup: {
            from: 'contactos',
            localField: 'pacientes.id_cont',
            foreignField: '_id',
            as: 'cont_paci'
          }
    },
    {
        $unwind: '$cont_paci'
    },
    {
        $project: {
            'pacientes._id':0,
            'pacientes.id_cont':0,
            'cont_paci._id':0,
            'cont_paci.fec_nac':0
          }
    }
]).pretty()

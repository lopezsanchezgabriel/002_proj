# Proyecto 2º Trimestre

Base de datos de un hospital.

Contiene las siguientes colecciones:

-Empleados

-Ingresados

-Contactos

-Vehiculos


## Contenidos

La carpeta *src* contiene los archivos:
    
-**data.js**: varios documentos para insertar en la colección de nuestra base de datos.


### Ejemplo de empleados

```console
EMPLEADOS
    {
		_id: 69,
        apellidos: 'Takebayashi', 
        nombre: 'Cecile', 
        fec_nac: new Date ('1995-07-18'), 
        cod_pos: '481968', 
        dir: '18 Maple Junction', 
        telf: '+383 674 805 2951', 
        cargo: 9, 
        fec_cont: new Date('2012-10-27'), 
        sueldo_ex: 420
    }
```


### Ejemplo de cargos

```console
CARGOS
    {
        _id: 69,
        titulo: 'Auxiliar de enfermeria',
        sueldo_b: 420
    }
```


### Ejemplo de ingresados

```console
INGRESADOS
    {
        _id: 1,
        apellidos: 'Bennetts',
        nombre: 'Melodie',
        fec_nac: new Date("1985-07-25"),
        id_cont: 1,
        fec_ing: new Date("2020-06-20"),
        gr_sang_rh: 'A+',
        id_med: 12,
        diagnostico: 'Fractura de perone izquierdo',
        habitacion: 362
    }
```


### Ejemplo de contactos

```console
CONTACTOS
    {
        _id: 1,
        apellidos: 'Bolding',
        nombre: 'Leandre',
        fec_nac: new Date('1983-11-19'),
        telf: '+33 137 271 9357'
    }
```


-**querys.js**: las sentencias para realizar consultas a los documentos de una coleccion.

-**querys_aggregate.js**: las sentencias para realizar consultas a documentos creados a partir de los 
datos de más de una colección.


## Construido con 

* [Visual Studio Code](https://code.visualstudio.com/) - El editor de texto multi lenguaje usado
* [MongoDB](https://www.mongodb.com/) - Programa de base de datos
* [Mockaroo](https://mockaroo.com/) - Generador de datos


## Autor 

* **Gabriel López Sánchez**
    [Github](https://github.com/lopezsanchezgabriel)

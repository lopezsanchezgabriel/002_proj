db.dropDatabase();


db.cargos.drop();
db.cargos.insertMany([
    {
        _id: 1,
        titulo: 'Celador',
        sueldo_b: 950
    },
    {
        _id: 2,
        titulo: 'Auxiliar de enfermeria',
        sueldo_b: 1250
    },
    {
        _id: 3,
        titulo: 'Encargado de limpieza y desinfeccion',
        sueldo_b: 1000
    },
    {
        _id: 4,
        titulo: 'Auxiliar de enfermeria en practicas'
    },
    {
        _id: 5,
        titulo: 'Conductor de ambulancia',
        sueldo_b: 1200
    },
    {
        _id: 6,
        titulo: 'Compañero de ambulancia',
        sueldo_b: 1200
    },
    {
        _id: 7,
        titulo: 'Recepcionista',
        sueldo_b: 950
    },
    {
        _id: 8,
        titulo: 'Medico general',
        sueldo_b: 1500
    },
    {
        _id: 9,
        titulo: 'Tecnico de rayos',
        sueldo_b: 1050
    },
]);


db.empleados.drop();
db.empleados.insertMany([
    {
    	_id: 1,
        apellidos: 'Flintiff', 
        nombre: 'Po', 
        fec_nac: new Date ('1986-02-04'), 
        cod_pos: '14-420', 
        dir: '4 Nevada Court', 
        telf: '+48 639 727 6892', 
        cargo: 1, 
        fec_cont: new Date('2012-01-18'),
        sueldo_ex: 60
    },
	{
		_id: 2,
        apellidos: 'Ximenez', 
        nombre: 'Nelie', 
        fec_nac: new Date ('1950-11-22'), 
        cod_pos: '662174', 
        dir: '48773 Prairie Rose Trail', 
        telf: '+7 311 246 6716', 
        cargo: 2, 
        fec_cont: new Date('2009-01-10'), 
        sueldo_ex: 52
    },
	{
		_id: 3,
        apellidos: 'Crich', 
        nombre: 'Torbjorn', 
        fec_nac: new Date ('1995-09-19'), 
        cod_pos: '19141', 
        dir: '457 Morning Alley', 
        telf: '+1 215 682 2405', 
        cargo: 3, 
        fec_cont: new Date('2018-10-30'), 
        sueldo_ex: 22
    },
	{
		_id: 4,
        apellidos: 'Ellcock', 
        nombre: 'Gisele', 
        fec_nac: new Date ('1998-12-22'), 
        cod_pos: '6549', 
        dir: '8448 Sheridan Alley', 
        telf: '+30 639 908 6378', 
        cargo: 4, 
        fec_cont: new Date('2013-04-07')
    },
	{
		_id: 5,
        apellidos: 'Greer', 
        nombre: 'Berengere', 
        fec_nac: new Date ('1958-09-22'), 
        cod_pos: '3515', 
        dir: '8 Mcguire Road', 
        telf: '+54 966 994 3244', 
        cargo: 5, 
        fec_cont: new Date('2018-10-10'), 
        sueldo_ex: 42
    },
	{
		_id: 6,
        apellidos: 'Ghest', 
        nombre: 'Gosta', 
        fec_nac: new Date ('1989-01-27'), 
        cod_pos: '5494', 
        dir: '37654 Mesta Park', 
        telf: '+62 199 755 1565', 
        cargo: 6, 
        fec_cont: new Date('2018-10-11'), 
        sueldo_ex: 33
    },
	{
		_id: 7,
        apellidos: 'Girone', 
        nombre: 'Helena', 
        fec_nac: new Date ('1973-12-26'), 
        cod_pos: '59861', 
        dir: '3333 Cottonwood Avenue', 
        telf: '+86 239 940 4360', 
        cargo: 7, 
        fec_cont: new Date('2012-07-22'), 
        sueldo_ex: 255
    },
	{
		_id: 8,
        apellidos: 'Stoakes', 
        nombre: 'Adele', 
        fec_nac: new Date ('1959-04-11'), 
        cod_pos: '607614', 
        dir: '60 Sycamore Trail', 
        telf: '+7 568 111 0983', 
        cargo: 6, 
        fec_cont: new Date('2007-12-09'), 
        sueldo_ex: 80
    },
	{
		_id: 9,
        apellidos: 'Serjeant', 
        nombre: 'Serena', 
        fec_nac: new Date ('1960-03-16'), 
        cod_pos: '2260-510', 
        dir: '51053 Lukken Alley', 
        telf: '+351 980 138 5247', 
        cargo: 2, 
        fec_cont: new Date('2014-11-06'), 
        sueldo_ex: 0
    },
	{
		_id: 10,
        apellidos: 'Blazi', 
        nombre: 'Melys', 
        fec_nac: new Date ('1971-09-03'), 
        cod_pos: '926819', 
        dir: '01202 Garrison Hill', 
        telf: '+355 483 858 9334', 
        cargo: 7, 
        fec_cont: new Date('2020-07-11'), 
        sueldo_ex: 100
    },
	{
		_id: 11,
        apellidos: 'Beaver', 
        nombre: 'Cecile', 
        fec_nac: new Date ('1990-02-25'), 
        cod_pos: '65194', 
        dir: '1686 Gale Crossing', 
        telf: '+234 956 371 3957', 
        cargo: 7, 
        fec_cont: new Date('2017-12-10'), 
        sueldo_ex: 90
    },
	{
		_id: 12,
        apellidos: 'Mohammad', 
        nombre: 'Leandre', 
        fec_nac: new Date ('1955-07-08'), 
        cod_pos: '94986', 
        dir: '07 Buell Crossing', 
        telf: '+86 765 727 8105', 
        cargo: 8, 
        fec_cont: new Date('2019-09-24'), 
        sueldo_ex: 75
    },
	{
		_id: 13,
        apellidos: 'Tolworth', 
        nombre: 'Meryl', 
        fec_nac: new Date ('1981-06-28'), 
        cod_pos: '848961', 
        dir: '036 Norway Maple Court', 
        telf: '+86 406 304 2205', 
        cargo: 8, 
        fec_cont: new Date('2012-12-27'), 
        sueldo_ex: 46
    },
	{
		_id: 14,
        apellidos: 'Demonge', 
        nombre: 'Marie', 
        fec_nac: new Date ('1980-07-09'), 
        cod_pos: '50990', 
        dir: '53 Mendota Place', 
        telf: '+60 478 670 6835', 
        cargo: 9, 
        fec_cont: new Date('2008-12-24'), 
        sueldo_ex: 120
    },
	{
		_id: 15,
        apellidos: 'Redihough', 
        nombre: 'Da', 
        fec_nac: new Date ('1988-03-14'), 
        cod_pos: '9849', 
        dir: '8 Rusk Trail', 
        telf: '+86 150 625 0244', 
        cargo: 2, 
        fec_cont: new Date('2018-04-20'), 
        sueldo_ex: 129
    },
	{
		_id: 16,
        apellidos: 'Bosdet', 
        nombre: 'Adelie', 
        fec_nac: new Date ('1982-09-25'), 
        cod_pos: '13546', 
        dir: '13 Stuart Terrace', 
        telf: '+62 343 200 9800', 
        cargo: 2, 
        fec_cont: new Date('2010-08-01'), 
        sueldo_ex: 71
    },
	{
		_id: 17,
        apellidos: 'Loan', 
        nombre: 'Reserves', 
        fec_nac: new Date ('1971-11-03'), 
        cod_pos: '5349', 
        dir: '8752 Oxford Hill', 
        telf: '+31 330 701 6509', 
        cargo: 3, 
        fec_cont: new Date('2007-08-11'), 
        sueldo_ex: 15
    },
	{
		_id: 18,
        apellidos: 'Oguz', 
        nombre: 'Ake', 
        fec_nac: new Date ('1963-01-15'), 
        cod_pos: 'H54', 
        dir: '367 Burning Wood Way', 
        telf: '+353 463 454 3126', 
        cargo: 2, 
        fec_cont: new Date('2011-12-25'), 
        sueldo_ex: 66
    },
	{
		_id: 19,
        apellidos: 'Richemond', 
        nombre: 'Nelie', 
        fec_nac: new Date ('1999-06-06'), 
        cod_pos: '16818', 
        dir: '1 Summer Ridge Pass', 
        telf: '+62 908 497 4122', 
        cargo: 4, 
        fec_cont: new Date('2007-12-11')
    },
	{
		_id: 20,
        apellidos: 'Farryn', 
        nombre: 'Cecile', 
        fec_nac: new Date ('1995-07-18'), 
        cod_pos: '481968', 
        dir: '18 Maple Junction', 
        telf: '+383 674 805 2951', 
        cargo: 9, 
        fec_cont: new Date('2012-10-27'), 
        sueldo_ex: 87
    }
]);


db.contactos.drop();
db.contactos.insertMany([
    {
        _id: 1,
        apellidos: 'Bolding',
        nombre: 'Leandre',
        fec_nac: new Date('1983-11-19'),
        telf: '+33 137 271 9357'
    },
    {
        _id: 2,
        apellidos: 'Probin',
        nombre: 'Meng',
        fec_nac: new Date('1964-06-15'),
        telf: '+55 559 214 3619'
    },
    {
        _id: 3,
        apellidos: 'Mecco',
        nombre: 'Rachele',
        fec_nac: new Date('1996-12-11'),
        telf: '+86 654 498 3076'
    },
    {
        _id: 4,
        apellidos: 'Mowle',
        nombre: 'Marlene',
        fec_nac: new Date('1982-02-26'),
        telf: '+351 129 220 0914'
    },
    {
        _id: 5,
        apellidos: 'Impey',
        nombre: 'Oceanne',
        fec_nac: new Date('2001-01-26'),
        telf: '+26 934 149 5210'
    },
    {
        _id: 6,
        apellidos: 'Vamplew',
        nombre: 'Marlene',
        fec_nac: new Date('1989-10-23'),
        telf: '+7 234 428 6889'
    },
    {
        _id: 7,
        apellidos: 'Haynesford',
        nombre: 'Styrbjorn',
        fec_nac: new Date('1994-02-09'),
        telf: '+48 391 228 7930'
    },
    {
        _id: 8,
        apellidos: 'Crichmere',
        nombre: 'Cinema',
        fec_nac: new Date('1950-07-29'),
        telf: '+36 542 514 1225'
    },
    {
        _id: 9,
        apellidos: 'Chretien',
        nombre: 'Mylene',
        fec_nac: new Date('1962-07-12'),
        telf: '+355 846 107 7265'
    },
    {
        _id: 10,
        apellidos: 'Rookeby',
        nombre: 'Oceane',
        fec_nac: new Date('1984-05-01'),
        telf: '+7 323 227 6887'
    },
    {
        _id: 11,
        apellidos: 'Lemmer',
        nombre: 'Mailys',
        fec_nac: new Date('1967-05-17'),
        telf: '+63 150 161 3191'
    },
    {
        _id: 12,
        apellidos: 'Hazael',
        nombre: 'Maeline',
        fec_nac: new Date('1951-10-13'),
        telf: '+63 648 275 7033'
    },
    {
        _id: 13,
        apellidos: 'McMarquis',
        nombre: 'Mailis',
        fec_nac: new Date('1976-02-10'),
        telf: '+56 435 982 1632'
    },
    {
        _id: 14,
        apellidos: 'Schimaschke',
        nombre: 'Nelie',
        fec_nac: new Date('1977-08-17'),
        telf: '+51 905 479 3023'
    },
    {
        _id: 15,
        apellidos: 'Westwood',
        nombre: 'Elea',
        fec_nac: new Date('2004-07-14'),
        telf: '+51 589 779 7914'
    },
    {
        _id: 16,
        apellidos: 'Stenet',
        nombre: 'Andre',
        fec_nac: new Date('1999-09-12'),
        telf: '+86 689 387 0557'
    },
    {
        _id: 17,
        apellidos: 'Hammelberg',
        nombre: 'Oceanne',
        fec_nac: new Date('2003-12-09'),
        telf: '+66 971 837 3543'
    },
    {
        _id: 18,
        apellidos: 'Zarfat',
        nombre: 'Te',
        fec_nac: new Date('1958-06-08'),
        telf: '+98 912 941 8158'
    },
    {
        _id: 19,
        apellidos: 'Huckle',
        nombre: 'Da',
        fec_nac: new Date('1994-08-21'),
        telf: '+66 704 634 3138'
    },
    {
        _id: 20,
        apellidos: 'Massard',
        nombre: 'Kevina',
        fec_nac: new Date('1985-05-25'),
        telf: '+76 738 343 7903'
    }
]);


db.ingresados.drop();
db.ingresados.insertMany([
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
    },
    {
        _id: 2,
        apellidos: 'Simoneau',
        nombre: 'Ruo',
        fec_nac: new Date("1982-05-13"),
        id_cont: 2,
        fec_ing: new Date("2014-06-25"),
        gr_sang_rh: 'A-',
        id_med: 12,
        diagnostico: 'Fallo renal',
        habitacion: 338
    },
    {
        _id: 3,
        apellidos: 'Shelford',
        nombre: 'Kui',
        fec_nac: new Date("1951-07-16"),
        id_cont: 3,
        fec_ing: new Date("2019-01-17"),
        gr_sang_rh: 'B+',
        id_med: 12,
        diagnostico: 'Fractura de cadera',
        habitacion: 177
    },
    {
        _id: 4,
        apellidos: 'Braidman',
        nombre: 'Megane',
        fec_nac: new Date("1982-01-14"),
        id_cont: 4,
        fec_ing: new Date("2016-08-15"),
        gr_sang_rh: 'B-',
        id_med: 12,
        diagnostico: 'Infarto agudo de miocardio',
        habitacion: 134
    },
    {
        _id: 5,
        apellidos: 'Sharpless',
        nombre: 'Laurena',
        fec_nac: new Date("1991-04-12"),
        id_cont: 5,
        fec_ing: new Date("2011-07-10"),
        gr_sang_rh: 'AB+',
        id_med: 12,
        diagnostico: 'Apendicitis',
        habitacion: 357
    },
    {
        _id: 6,
        apellidos: 'Shilladay',
        nombre: 'Solene',
        fec_nac: new Date("1950-06-07"),
        id_cont: 6,
        fec_ing: new Date("2015-01-03"),
        gr_sang_rh: 'AB-',
        id_med: 12,
        diagnostico: 'Cesarea',
        habitacion: 104
    },
    {
        _id: 7,
        apellidos: 'Enders',
        nombre: 'Renee',
        fec_nac: new Date("1956-01-03"),
        id_cont: 7,
        fec_ing: new Date("2014-09-17"),
        gr_sang_rh: '0+',
        id_med: 12,
        diagnostico: 'Traumatismo craneoencefalico',
        habitacion: 337
    },
    {
        _id: 8,
        apellidos: 'Hindes',
        nombre: 'Mediamass',
        fec_nac: new Date("2001-06-25"),
        id_cont: 8,
        fec_ing: new Date("2016-08-03"),
        gr_sang_rh: '0-',
        id_med: 13,
        diagnostico: 'Fractura de varias costillas y quemaduras de grado 2 en el brazo derecho',
        habitacion: 237
    },
    {
        _id: 9,
        apellidos: 'Padson',
        nombre: 'Aslog',
        fec_nac: new Date("1989-10-27"),
        id_cont: 9,
        fec_ing: new Date("2019-11-13"),
        gr_sang_rh: 'A+',
        id_med: 13,
        diagnostico: 'Reimplantacion del dedo pulgar derecho',
        habitacion: 278
    },
    {
        _id: 10,
        apellidos: 'Tomaszkiewicz',
        nombre: 'Stu',
        fec_nac: new Date("1989-07-17"),
        id_cont: 10,
        fec_ing: new Date("2009-11-14"),
        gr_sang_rh: 'A-',
        id_med: 13,
        diagnostico: 'Coma etilico',
        habitacion: 102
    },
    {
        _id: 11,
        apellidos: 'Keetley',
        nombre: 'Edmee',
        fec_nac: new Date("1972-02-23"),
        id_cont: 11,
        fec_ing: new Date("2011-10-16"),
        gr_sang_rh: 'B+',
        id_med: 13,
        diagnostico: 'Extracion de una bala de entre las vertrebras 2L y 3L',
        habitacion: 227
    },
    {
        _id: 12,
        apellidos: 'Tookey',
        nombre: 'Alois',
        fec_nac: new Date("1961-01-20"),
        id_cont: 12,
        fec_ing: new Date("2014-10-02"),
        gr_sang_rh: 'B-',
        id_med: 13,
        diagnostico: 'Hemorragia digestiva',
        habitacion: 174
    },
    {
        _id: 13,
        apellidos: 'McSkin',
        nombre: 'Becassine',
        fec_nac: new Date("1956-03-12"),
        id_cont: 13,
        fec_ing: new Date("2007-01-14"),
        gr_sang_rh: 'AB+',
        id_med: 13,
        diagnostico: 'Shock septico',
        habitacion: 190
    },
    {
        _id: 14,
        apellidos: 'Ablott',
        nombre: 'Benedicte',
        fec_nac: new Date("1951-10-02"),
        id_cont: 14,
        fec_ing: new Date("2012-02-09"),
        gr_sang_rh: 'AB-',
        id_med: 13,
        diagnostico: 'Peritonitis',
        habitacion: 275
    },
    {
        _id: 15,
        apellidos: 'Eburne',
        nombre: 'Frederique',
        fec_nac: new Date("2001-11-04"),
        id_cont: 15,
        fec_ing: new Date("2007-12-13"),
        gr_sang_rh: '0+',
        id_med: 13,
        diagnostico: 'Coma hipoglucemico',
        habitacion: 141
    },
    {
        _id: 16,
        apellidos: 'Fidler',
        nombre: 'Anae',
        fec_nac: new Date("1971-02-03"),
        id_cont: 16,
        fec_ing: new Date("2012-04-22"),
        gr_sang_rh: '0-',
        id_med: 13,
        diagnostico: 'Accidente cerebro vascular',
        habitacion: 302
    },
    {
        _id: 17,
        apellidos: 'Krojn',
        nombre: 'Rui',
        fec_nac: new Date("2002-11-12"),
        id_cont: 17,
        fec_ing: new Date("2011-09-24"),
        gr_sang_rh: 'A+',
        id_med: 13,
        diagnostico: 'Dificultades respiratorias severas',
        habitacion: 121
    },
    {
        _id: 18,
        apellidos: 'Kellet',
        nombre: 'Maely',
        fec_nac: new Date("1994-01-20"),
        id_cont: 18,
        fec_ing: new Date("2010-09-14"),
        gr_sang_rh: 'B-',
        id_med: 13,
        diagnostico: 'Intoxicacion',
        habitacion: 262
    },
    {
        _id: 19,
        apellidos: 'Wittman',
        nombre: 'Marta',
        fec_nac: new Date("1951-12-18"),
        id_cont: 19,
        fec_ing: new Date("2010-09-15"),
        gr_sang_rh: 'AB+',
        id_med: 13,
        diagnostico: 'Operacion de cancer de pulmon',
        habitacion: 157
    },
    {
        _id: 20,
        apellidos: 'Earland',
        nombre: 'Kalliste',
        fec_nac: new Date("2000-01-18"),
        id_cont: 20,
        fec_ing: new Date("2008-08-13"),
        gr_sang_rh: '0-',
        id_med: 13,
        diagnostico: 'Autolesiones',
        habitacion: 10
    }
]);





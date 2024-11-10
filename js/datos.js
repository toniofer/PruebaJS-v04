
const marcasProcesador = [
    {
        id: 1,
        marca: "Intel",
        imagen: "./images/logos_marcas/logo_intel.jpg"
    },
    {
        id: 2,
        marca: "AMD",
        imagen: "./images/logos_marcas/logo_amd.webp"
    }
];


const procesadores = [
    {
        id: 1,
        marca: "Intel",
        modelo: "Celeron G5905",
        socketProc: "LGA 1200",
        generacion: 10,         
        imagen: "./images/procesadores/celeron.jpg",
        precio: 67
    },
    {
        id: 2,
        marca: "Intel",
        modelo: "I3 10100",
        socketProc:"LGA 1200",
        generacion: 10,     
        imagen: "./images/procesadores/i3.jpg",
        precio: 129
    },
    {
        id: 3,
        marca: "Intel",
        modelo: "I5 11400",
        socketProc: "LGA 1200",
        generacion: 11, 
        imagen: "./images/procesadores/i5.jpg",
        precio: 182
    },
    {
        id: 4,
        marca: "Intel",
        modelo: "Celeron G6900",
        socketProc: "LGA 1700",
        generacion: 12,
        imagen: "./images/procesadores/celeron.jpg",
        precio: 99
    },
    {
        id: 5,
        marca: "Intel",
        modelo: "I3 12100",
        socketProc:  "LGA 1700",
        generacion: 12,       
        imagen: "./images/procesadores/i3.jpg",
        precio: 163
    },
    {
        id: 6,
        marca: "Intel",
        modelo: "I5 12400F",
        socketProc:  "LGA 1700",
        generacion: 12,
        imagen: "./images/procesadores/i5.jpg",
        precio: 176
    },
    {
        id: 7,
        marca: "Intel",
        modelo: "I3 13100F",
        socketProc:  "LGA 1700",
        generacion: 13,       
        imagen: "./images/procesadores/i3.jpg", 
        precio: 163
    },
    {
        id: 8,
        marca:"Intel",
        modelo: "I5 13400",
        socketProc:  "LGA 1700",
        generacion: 13,
        imagen: "./images/procesadores/i5.jpg",
        precio: 295
    },
    {
        id: 9,
        marca:"Intel",
        modelo: "I7 13700",
        socketProc: "LGA 1700",
        generacion: 13,
        imagen: "./images/procesadores/i7.jpg",
        precio: 568
    },
    {
        id: 10, 
        marca:"Intel",
        modelo: "I5 14600KF",
        socketProc:  "LGA 1700",
        generacion: 14,
        imagen: "./images/procesadores/i5.jpg",
        precio: 407
    },
    {
        id: 11,
        marca:"Intel",
        modelo: "I7 14700",
        socketProc:  "LGA 1700",
        generacion: 14,
        imagen: "./images/procesadores/i7.jpg",
        precio: 589
    },
    {
        id: 12,
        marca: "AMD",
        modelo: "RYZEN 3 3200G",
        socketProc: "AM4",
        generacion: 2, 
        imagen: "./images/procesadores/ryzen3.jpg",
        precio: 85
    },
    {
        id: 13,
        marca: "AMD",
        modelo: "ATHLON 3000G",
        socketProc: "AM4",
        generacion: 3,
        imagen: "./images/procesadores/athlon.jpg",
        precio: 60
    },
    {
        id: 14,
        marca: "AMD",
        modelo: "RYZEN 3 5300G",
        socketProc: "AM4",
        generacion: 3,     
        imagen: "./images/procesadores/ryzen3.jpg",
        precio: 139
    },
    {
        id: 15,
        marca:"AMD",
        modelo: "RYZEN 3 4100",
        socketProc: "AM4",
        generacion: 4, 
        imagen: "./images/procesadores/ryzen3.jpg",
        precio: 93
    },
    {
        id: 16,
        marca:"AMD",
        modelo: "RYZEN 5 4500",
        socketProc: "AM4",
        generacion: 4, 
        imagen: "./images/procesadores/ryzen5.jpg",
        precio: 109
    },
    {
        id: 17,
        marca: "AMD",
        modelo: "RYZEN 5 4600G",
        socketProc: "AM4",
        generacion: 4, 
        imagen: "./images/procesadores/ryzen5.jpg",
        precio: 129
    },
    {
        id: 18,
        marca:"AMD",
        modelo: "RYZEN 5 5500",
        socketProc: "AM4",
        generacion: 5,
        imagen: "./images/procesadores/ryzen5.jpg",
        precio: 128
    },
    {
        id: 19,
        marca:"AMD",
        modelo: "RYZEN 7 5800X",
        socketProc: "AM4",
        generacion: 5, 
        imagen: "./images/procesadores/ryzen7.jpg",
        precio: 260
    },
    {
        id: 20,
        marca:"AMD",
        modelo: "RYZEN 5 7600",
        socketProc: "AM5",
        generacion:  7, 
        imagen: "./images/procesadores/ryzen5.jpg",
        precio: 276
    },
    {
        id: 21,
        marca:"AMD",
        modelo: "RYZEN 5 8500G",
        socketProc: "AM5",
        generacion: 8,
        imagen: "./images/procesadores/ryzen5.jpg",
        precio: 204
    },
    {
        id: 22,
        marca:"AMD",
        modelo: "RYZEN 7 8700F",
        socketProc: "AM5",
        generacion: 8,
        imagen: "./images/procesadores/ryzen7.jpg",
        precio: 345
    },
    {
        id: 23,
        marca:"AMD",
        modelo: "RYZEN 7 9700X",
        socketProc: "AM5",
        generacion: 9,
        imagen: "./images/procesadores/ryzen7.jpg",
        precio: 514
    }
];

const placas = [
    {
        id: 1,
        marca:"Asus", 
        modelo: "Prime H510M-K R 2.0",
        socketProc: "LGA 1200",
        generacionProc: [10, 11],
        RAM: "DDR4",
        imagen: "./images/placas/Prime H510M-K R 2.0.jpg",
        precio: 89
    },
    {
        id: 2,
        marca:"Gigabyte", 
        modelo: "H470M H",
        socketProc: "LGA 1200",
        generacionProc: [10, 11],
        RAM: "DDR4",
        imagen: "./images/placas/H470M H.jpg",
        precio: 110
    },
    {
        id: 3,
        marca:"Gigabyte", 
        modelo: "H510M H V2",
        socketProc: "LGA 1200",
        generacionProc: [10, 11],
        RAM: "DDR4",
        imagen: "./images/placas/H510M H V2.jpg",
        precio: 85
    },
    {
        id: 4,
        marca:"Asus", 
        modelo: "H610M-K D4",
        socketProc: "LGA 1700",
        generacionProc: [12, 13],
        RAM: "DDR4",
        imagen: "./images/placas/H610M-K D4.jpg",
        precio: 103
    },
    {
        id: 5,
        marca:"Gigabyte", 
        modelo: "H610M H V2",
        socketProc: "LGA 1700",
        generacionProc: [12,13,14],
        RAM: "DDR4",
        imagen: "./images/placas/H610M H V2.jpg",
        precio: 104
    },
    {
        id: 6,
        marca:"MSI", 
        modelo: "Pro B760M-E DDR4",
        socketProc: "LGA 1700",
        generacionProc: [12,13,14],
        RAM: "DDR4",
        imagen: "./images/placas/Pro B760M-E DDR4.jpg",
        precio: 118
    },
    {
        id: 7,
        marca:"Gigabyte", 
        modelo: "B760M E",
        socketProc: "LGA 1700",
        generacionProc: [12,13],
        RAM: "DDR5",
        imagen: "./images/placas/B760M E.jpg",
        precio: 133
    },
    {
        id: 8,
        marca:"Gigabyte", 
        modelo: "B760M DS3H DDR5",
        socketProc: "LGA 1700",
        generacionProc: [12,13,14],
        RAM: "DDR5",
        imagen: "./images/placas/B760M DS3H DDR5.jpg",
        precio: 179
    },
    {
        id: 9,
        marca:"Asus", 
        modelo: "Prime B660M-A D4",
        socketProc: "LGA 1700",
        generacionProc: [12,13],
        RAM: "DDR4",
        imagen: "./images/placas/Prime B660M-A D4.jpg",
        precio: 184
    },

    {
        id: 10,
        marca:"Gigabyte", 
        modelo: "A520M S2H",
        socketProc: "AM4",
        generacionProc: [3,4,5],
        RAM: "DDR4",
        imagen: "./images/placas/A520M S2H.jpg",
        precio: 88
    },
    {
        id: 11,
        marca:"Gigabyte", 
        modelo: "B450M DS3H V2",
        socketProc: "AM4",
        generacionProc: [2,3,4,5],
        RAM: "DDR4",
        imagen: "./images/placas/B450M DS3H V2.jpg",
        precio: 94
    },
    {
        id: 12,
        marca:"MSI", 
        modelo: "B550M-A PRO",
        socketProc: "AM4",
        generacionProc: [3,4],
        RAM: "DDR4",
        imagen: "./images/placas/B550M-A PRO.jpg",
        precio: 102
    },
    {
        id: 13,
        marca:"Asus", 
        modelo: "A620M-K",
        socketProc: "AM5",
        generacionProc: [7],
        RAM: "DDR5",
        imagen: "./images/placas/A620M-K.jpg",
        precio: 114
    },
    {
        id: 14,
        marca:"Gigabyte", 
        modelo: "A620M S2H",
        socketProc: "AM5",
        generacionProc: [7],
        RAM: "DDR5",
        imagen: "./images/placas/A620M S2H.jpg",
        precio: 124
    },
    {
        id: 15,
        marca:"Gigabyte", 
        modelo: "A620M DS3H",
        socketProc: "AM5",
        generacionProc: [7,8,9],
        RAM: "DDR5",
        imagen: "./images/placas/A620M DS3H.jpg",
        precio: 160
    }
];

const rams = [
    {
        id: 1,
        marca: "Netac",
        modelo: "NTBSD4P26SP-08",
        socketRAM: "DDR4",
        capacidad: 8,
        velocidad: 2666,
        imagen: "./images/rams/netac.jpg",
        precio: 19
    },
    {
        id: 2,
        marca: "Netac",
        modelo: "NTSDD4P32SP-08R",
        socketRAM: "DDR4",
        capacidad: 8,
        velocidad: 3200,
        imagen: "./images/rams/netac.jpg",
        precio: 24
    },
    {
        id: 3,
        marca: "Netac",
        modelo: "NTSDD4P32SP-16R",
        socketRAM: "DDR4",
        capacidad: 16,
        velocidad: 3200,
        imagen: "./images/rams/netac.jpg",
        precio: 33
    },
    {
        id: 4,
        marca: "Corsair",
        modelo: "CMG8GX4M1E3200C1",
        socketRAM: "DDR4",
        capacidad: 8,
        velocidad: 3200,
        imagen: "./images/rams/corsair.jpg",
        precio: 31
    },
    {
        id: 5,
        marca: "Kingston",
        modelo: "KVR32N22S6/8",
        socketRAM: "DDR4",
        capacidad: 8,
        velocidad: 3200,
        imagen: "./images/rams/kingston.jpg",
        precio: 29
    },
    {
        id: 6,
        marca: "Kingston",
        modelo: "KVR32N22S6/8",
        socketRAM: "DDR4",
        capacidad: 8,
        velocidad: 3200,
        imagen: "./images/rams/kingston.jpg",
        precio: 29
    },
    {
        id: 7,
        marca: "Kingston",
        modelo: "KF440C19RBK2/16",
        socketRAM: "DDR4",
        capacidad: 16,
        velocidad: 4400,
        imagen: "./images/rams/kingston.jpg",
        precio: 49
    },
    {
        id: 8,
        marca: "Kingston",
        modelo: "KF552C40BB-8",
        socketRAM: "DDR5",
        capacidad: 8,
        velocidad: 5200,
        imagen: "./images/rams/kingston.jpg",
        precio: 51
    },
    {
        id: 9,
        marca: "Kingston",
        modelo: "KF556C40BBA-16",
        socketRAM: "DDR5",
        capacidad: 16,
        velocidad: 5600,
        imagen: "./images/rams/kingston.jpg",
        precio: 94
    },
    {
        id: 10,
        marca: "Kingston",
        modelo: "KF568C36RS-16",
        socketRAM: "DDR5",
        capacidad: 16,
        velocidad: 6800,
        imagen: "./images/rams/kingston.jpg",
        precio: 227
    },
    {
        id: 11,
        marca: "Corsair",
        modelo: "CMK16GX5M1B5600C40",
        socketRAM: "DDR5",
        capacidad: 16,
        velocidad: 5600,
        imagen: "./images/rams/corsair.jpg",
        precio: 71
    },
    {
        id: 12,
        marca: "Corsair",
        modelo: "CMK32GX5M2B5200Z40",
        socketRAM: "DDR5",
        capacidad: 32,
        velocidad: 5200,
        imagen: "./images/rams/corsair.jpg",
        precio: 134
    }
];

const discos = [
    {
        id: 1,
        marca: "WD",
        modelo: "WD10PURZ",
        tipo: "HDD",
        capacidad: 1000,
        imagen: "./images/almacenamientos/WD10PURZ.jpg",
        precio: 75
    },
    {
        id: 2,
        marca: "Kingston",
        modelo: "SA400S37/240",
        tipo: "SSD",
        capacidad: 240,
        imagen: "./images/almacenamientos/sa400 240.jpg",
        precio: 35
    },
    {
        id: 3,
        marca: "Kingston",
        modelo: "SA40037/480",
        tipo: "SSD",
        capacidad: 480,
        imagen: "./images/almacenamientos/sa400 480.jpg",
        precio: 46
    },
    {
        id: 4,
        marca: "Kingston",
        modelo: "SA40037/960",
        tipo: "SSD",
        capacidad: 960,
        imagen: "./images/almacenamientos/sa400 960.jpg",
        precio: 73
    },
    {
        id: 5,
        marca: "Kingston",
        modelo: "SNV2S/500",
        tipo: "SSD M.2",
        capacidad: 500,
        imagen: "./images/almacenamientos/SNV2S 500.jpg",
        precio: 55
    },
    {
        id: 6,
        marca: "Kingston",
        modelo: "SNV2S/1000",
        tipo: "SSD M.2",
        capacidad: 1000,
        imagen:"./images/almacenamientos/SNV2S 1000.jpg",
        precio: 78
    },
];

const gabinetes = [
    {
        id: 1,
        marca: "DeepCool",
        modelo: "CC560", 
        imagen: "./images/gabinetes/DeepCool CC560.jpg",
        precio: 65
    },
    {
        id: 2,
        marca: "DeepCool",
        modelo: "Matrexx 40 3FS", 
        imagen: "./images/gabinetes/DeepCool Matrexx 40.jpg",
        precio: 65
    },
    {
        id: 3,
        marca: "Cougar",
        modelo: "Archon 2 Mesh RGB", 
        imagen: "./images/gabinetes/Cougar Archon 2 Mesh RGB.jpg",
        precio: 80
    },
    {
        id: 4,
        marca: "Antec",
        modelo: "CX800 RGB", 
        imagen: "./images/gabinetes/Antec CX800 RGB Elite Black.jpg",
        precio: 95
    }
];

const fuentes = [
    {
        id: 1,
        marca: "Gigabyte",
        modelo: "GP-P450B 80+ Bronze",        
        potencia: 450,
        imagen: "./images/fuentes/Gigabyte GP-P450B 80+ Bronze.jpg",
        precio: 46
    },
    {
        id: 2,
        marca: "Cougar",
        modelo: "STC 500W",        
        potencia: 500,
        imagen: "./images/fuentes/Cougar STC500w 80 Plus.jpg",
        precio: 59
    },
    {
        id: 3,
        marca: "DeepCool",
        modelo: "PF650 80+ Plus",        
        potencia: 650,
        imagen: "./images/fuentes/Deepcool PF650 80 Plus.jpg",
        precio: 65
    },
    {
        id: 4,
        marca: "Cooler Master",
        modelo: "MWE V3 80 Plus Bronze",        
        potencia: 750,
        imagen: "./images/fuentes/Cooler Master MWE 750W V3 80 Plus Bronze.jpg",
        precio: 95
    }
];


const componentes = {marcasProcesador, procesadores, placas, rams, discos, gabinetes, fuentes};

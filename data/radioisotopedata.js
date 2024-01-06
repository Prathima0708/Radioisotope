// import { images } from "../constants";
// import radioisotopeimages from "./radioisotopeimages";

// export const RadioisotopeData = [
//     {
//         id: '1',
//         image: images.diagnostic,
//         name: 'Diagnostic Radioisotope',
//         date: 'General',
//         elements: [
//             {
//                 id: 'e1',
//                 name: 'Carbon-11',
//                 symbol: 'C-11',
//                 period: 2,
//                 group: 14,
//                 atomicNumber: 6,
//                 atomicWeight: 11.011,
//                 halfLife: '20.364 minutes',
//                 productionMethod: 'Cyclotron, Nuclear fission ',
//                 energyType: 'Positron emission',
//                 oxidationstate:4,
//                 parentRadionuclide:' 14N(p,α)11C',
//                 decayproduct:'B-11',
//                 naturalstructure:'Tetrahedral',
//                 decayimage:require('../assets/radioisotopeimages/diagnoticimages/sorenson.png')
//                 // ... other details
//             },
//             {
//                 id: 'e2',
//                 name: 'Copper62',
//                 symbol: 'Cu',
//                 period: 4,
//                 group: 11,
//                 atomicNumber: 29,
//                 atomicWeight: 61.932,
//                 halfLife: '9.67 minutes',
//                 productionMethod: 'Cyclotron',
//                 energyType: 'Positron emission',
//                 oxidationstate:2,
//                 parentRadionuclide:'Zn-62',
//                 decayproduct:'Ni-62',
//                 naturalstructure:'Face centred cubic crystal (FCC)'

//                 // ... other details
//             },
//             {
//                 id: 'e3',
//                 name: 'Copper-64',
//                 symbol: 'Cu-64',
//                 period: 4,
//                 group: 11,
//                 atomicNumber: 29,
//                 atomicWeight: 63.929,
//                 halfLife: '12.70hrs',
//                 productionMethod: 'Cyclotron',
//                 energyType: 'Positron emission',
//                 oxidationstate:2,
//                 parentRadionuclide:'64Ni(p,n)64Cu',
//                 decayproduct:'Zn-64, Ni-64',
//                 naturalstructure:'Face centred cubic crystal (FCC)'
//                 // ... other details
//             },

//             // ... other elements
//         ],
//     },
//     {
//         id: '2',
//         image: images.therapeutic,
//         name: 'Therapeutic Radioisotope',
//         date: 'General',
//         elements: [
//             {
//                 id: 'e1',
//                 name: 'Carbon-11',
//                 symbol: 'C-11',
//                 period: 2,
//                 group: 14,
//                 atomicNumber: 6,
//                 atomicWeight: 11.011,
//                 halfLife: '20.364 minutes',
//                 productionMethod: 'Cyclotron, Nuclear fission ',
//                 energyType: 'Positron emission',
//                 oxidationstate:4,
//                 parentRadionuclide:' 14N(p,α)11C',
//                 decayproduct:'B-11',
//                 naturalstructure:'Tetrahedral',
//                 decayimage:require('../assets/radioisotopeimages/diagnoticimages/sorenson.png')
//                 // ... other details
//             },
//             {
//                 id: 'e2',
//                 name: 'Copper62',
//                 symbol: 'Cu',
//                 period: 4,
//                 group: 11,
//                 atomicNumber: 29,
//                 atomicWeight: 61.932,
//                 halfLife: '9.67 minutes',
//                 productionMethod: 'Cyclotron',
//                 energyType: 'Positron emission',
//                 oxidationstate:2,
//                 parentRadionuclide:'Zn-62',
//                 decayproduct:'Ni-62',
//                 naturalstructure:'Face centred cubic crystal (FCC)'

//                 // ... other details
//             },
//             {
//                 id: 'e3',
//                 name: 'Copper-64',
//                 symbol: 'Cu-64',
//                 period: 4,
//                 group: 11,
//                 atomicNumber: 29,
//                 atomicWeight: 63.929,
//                 halfLife: '12.70hrs',
//                 productionMethod: 'Cyclotron',
//                 energyType: 'Positron emission',
//                 oxidationstate:2,
//                 parentRadionuclide:'64Ni(p,n)64Cu',
//                 decayproduct:'Zn-64, Ni-64',
//                 naturalstructure:'Face centred cubic crystal (FCC)'
//                 // ... other details
//             },

//             // ... other elements
//         ],
//     },
//     {
//         id: '3',
//         image: images.theranostic,
//         name: 'Theranostic Radioisotope',
//         date: 'General',
//     },
//     {
//         id: '4',
//         image: images.nonclinical,
//         name: 'Non Clinical Radioisotope',
//         date: 'General',
//     },
// ]

import { images } from '../constants'
import radioisotopeimages from './radioisotopeimages'

export const RadioisotopeData = [
    {


        id: '1',
        image: images.diagnostic,
        name: 'Diagnostic Radioisotope',
        date: 'General',
        elements: [
            {
                id: 'e1',
                name: 'Carbon-11',
                symbol: 'C-11',
                period: 2,
                group: 14,
                atomicNumber: 6,
                atomicWeight: 11.011,
                halfLife: '20.364 minutes',
                productionMethod: 'Cyclotron, Nuclear fission ',
                energyType: 'Positron emission',
                oxidationstate:4,
                parentRadionuclide:' 14N(p,α)11C',
                decayproduct:'B-11',
                naturalstructure:'Tetrahedral',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/carbon11.png')
                
                // ... other details
            },
            {
                id: 'e2',
                name:'Copper62',
                symbol: 'Cu',
                period: 4,
                group: 11,
                atomicNumber: 29,
                atomicWeight: 61.932,
                halfLife: '9.67 minutes',
                productionMethod: 'Cyclotron',
                energyType: 'Positron emission',
                oxidationstate:2,
                parentRadionuclide:'Zn-62',
                decayproduct:'Ni-62',
                naturalstructure:'Face centred cubic crystal (FCC)',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/copper62.png')
    
                // ... other details
            },
            {
                id: 'e3',
                name: 'Copper-64',
                symbol: 'Cu-64',
                period: 4,
                group: 11,
                atomicNumber: 29,
                atomicWeight: 63.929,
                halfLife: '12.70hrs',
                productionMethod: 'Cyclotron',
                energyType: 'Positron emission',
                oxidationstate:2,
                parentRadionuclide:'64Ni(p,n)64Cu',
                decayproduct:'Zn-64, Ni-64',
                naturalstructure:'Face centred cubic crystal (FCC)',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/copper64.png')
                
                // ... other details
            },
            {
                id: 'e4',
                name: 'Fluorine-18',
                symbol: 'F-18',
                period: 2,
                group: 17,
                atomicNumber: 9,
                atomicWeight: 18,
                halfLife: '109.77mins',
                productionMethod: 'Cyclotron',
                energyType: 'Positron emission',
                oxidationstate:-1,
                parentRadionuclide:'Ne-18',
                decayproduct:'O-18',
                naturalstructure:'Cubic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/fluorine18.png')
                
            },
            {
                id: 'e5',
                name: 'Gallium-67',
                symbol: 'Ga-67',
                period: 4,
                group: 13,
                atomicNumber: 31,
                atomicWeight: 66.928,
                halfLife: '3.2617days',
                productionMethod: 'Generator',
                energyType: 'Gamma',
                oxidationstate:3,
                parentRadionuclide:'Ge-67, 68Zn (p,2n)67Ga',
                decayproduct:'Zn-67',
                naturalstructure:'Orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Gallium67.png')
                
            },
            {
                id: 'e6',
                name: 'Gallium-68',
                symbol: 'Ga-68',
                period: 4,
                group: 13,
                atomicNumber: 31,
                atomicWeight: 67.927,
                halfLife: '67.71mins',
                productionMethod: 'Generator',
                energyType: 'Gamma',
                oxidationstate:3,
                parentRadionuclide:'Ge-68',
                decayproduct:'Zn-68',
                naturalstructure:'Orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Gallium68.png')
                
            },
            {
                id: 'e7',
                name: 'Indium-111',
                symbol: 'In-111',
                period: 5,
                group: 13,
                atomicNumber: 49,
                atomicWeight: 110.905,
                halfLife: '2.8047days',
                productionMethod: 'Cyclotron',
                energyType: 'Gamma',
                oxidationstate:'1+3',
                parentRadionuclide:'112Cd(p,2n)111In, Sn-111,In-111m1',
                decayproduct:'Cd-111',
                naturalstructure:'Tetragonal crystal',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Indium111.png')
                
            },
            {
                id: 'e8',
                name: 'Indium-113',
                symbol: 'In-113',
                period: 5,
                group: 13,
                atomicNumber: 49,
                atomicWeight: 112.9,
                halfLife: 'Stable',
                productionMethod: 'Cyclotron',
                energyType: 'Gamma',
                oxidationstate:'1+3',
                parentRadionuclide:'Cd-113,Sn-113,In-113m,Cd-113m,Sn-113m',
                decayproduct:'stable',
                naturalstructure:'Tetragonal crystal',
                decayimage:''
                
            },
            {
                id: 'e9',
                name: 'Iodine-123',
                symbol: 'I-123',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 122.90559,
                halfLife: '122.90559',
                productionMethod: 'Cyclotron',
                energyType: 'Gamma',
                oxidationstate:-1,
                parentRadionuclide:'Xe-123',
                decayproduct:'Te-123',
                naturalstructure:'base-centered orthorhombic',
                decayimage:''
            },
            {
                id: 'e10',
                name: 'Iodine-124',
                symbol: 'I-124',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 123.90621,
                halfLife: '4.1760days',
                productionMethod: 'Cyclotron',
                energyType: 'Beta, Gamma',
                oxidationstate:-1,
                parentRadionuclide:'124Te(p, n)124I',
                decayproduct:'Te-124',
                naturalstructure:'base-centered orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Iodine124.jpg')
            },
            {
                id: 'e11',
                name: 'Iodine-125',
                symbol: 'I-125',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 124.9046,
                halfLife: '59.407days',
                productionMethod: 'Nuclear reactor',
                energyType: 'Gamma',
                oxidationstate:-1,
                parentRadionuclide:'Xe-125',
                decayproduct:'Te-125',
                naturalstructure:'base-centered orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/iodine125.png')
                
            },
            {
                id: 'e12',
                name: 'Iodine-131',
                symbol: 'I-131',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 130.9061,
                halfLife: '8.025days',
                productionMethod: 'Nuclear fission',
                energyType: 'Beta',
                oxidationstate:-1,
                parentRadionuclide:'Te-131,Te-131m',
                decayproduct:'Xe-131',
                naturalstructure:'base-centered orthorhombic',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Iodine131.jpg')
                
            },
            {
                id: 'e13',
                name: 'Krypton-81m',
                symbol: 'Kr-81m',
                period: 4,
                group: 18,
                atomicNumber: 36,
                atomicWeight: '',
                halfLife: '13.10secs',
                productionMethod: 'Generator',
                energyType: 'Gamma',
                oxidationstate:'0/+2',
                parentRadionuclide:'Ru-81',
                decayproduct:'Kr-81,Br-81',
                naturalstructure:'Face centred cubic crystal (FCC)',
                decayimage:''
                
            },
            {
                id: 'e14',
                name: 'Nitrogen-13',
                symbol: 'N-13',
                period: 2,
                group: 15,
                atomicNumber: 7,
                atomicWeight: 13,
                halfLife: '9.965mi',
                productionMethod: 'Cyclotron',
                energyType: 'Positron emission',
                oxidationstate:'±Ʒ,+5',
                parentRadionuclide:'16O(p,α)13N',
                decayproduct:'C-13',
                naturalstructure:'Hexagonal ',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/nitrogen13.png')
                
            },
            {
                id: 'e15',
                name: 'Oxygen-15',
                symbol: 'O-15',
                period: 2,
                group: 16,
                atomicNumber: 8,
                atomicWeight: 15,
                halfLife: '122.24secs',
                productionMethod: 'Cyclotron',
                energyType: 'Positron emission',
                oxidationstate:-2,
                parentRadionuclide:'F-16',
                decayproduct:'N-15',
                naturalstructure:'Orthorhombic ',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/oxygen15.png')
                
            },
            {
                id: 'e16',
                name: 'Rubidium-82',
                symbol: 'RU-82',
                period: 5,
                group: 1,
                atomicNumber: 44,
                atomicWeight: '',
                halfLife: '',
                productionMethod: 'Generator',
                energyType: 'Positron emission',
                oxidationstate:1,
                parentRadionuclide:'Sr-82',
                decayproduct:'Kr-82',
                naturalstructure:'body-centered cubic crystal',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Rubidium82.png')
                
            },
            {
                id: 'e17',
                name: 'Technitium-94m',
                symbol: 'Tc-94m',
                period: 5,
                group: 7,
                atomicNumber: 43,
                atomicWeight: 93.909,
                halfLife: '52.5min',
                productionMethod: 'Nuclear reactor',
                energyType: 'Positron emission',
                oxidationstate:7,
                parentRadionuclide:'94Mo(p,n)94mTc',
                decayproduct:'Mo-94',
                naturalstructure:'Hexagonal close packed(HCP)',
                decayimage:''
            },
            {
                id: 'e18',
                name: 'Technitium-99m',
                symbol: 'Tc-99m',
                period: 5,
                group: 7,
                atomicNumber: 43,
                atomicWeight: 98.9,
                halfLife: '6.00hrs',
                productionMethod: 'Generator',
                energyType: 'Gamma',
                oxidationstate:7,
                parentRadionuclide:'Mo-99',
                decayproduct:'Ru-99',
                naturalstructure:'Hexagonal close packed(HCP)',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Technitium99.png')
                
            },
            {
                id: 'e19',
                name: 'Thallium-201',
                symbol: 'Tl-201',
                period: 6,
                group: 13,
                atomicNumber: 81,
                atomicWeight: 200.97,
                halfLife: '3.0421hrs',
                productionMethod: 'Cyclotron',
                energyType: 'X-rays, Gamma',
                oxidationstate:1,
                parentRadionuclide:'Pb-201, Tl-201m',
                decayproduct:'Hg-201',
                naturalstructure:'Hexagonal close packed(HCP)',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Thallium201.jpg')
                
            },
            {
                id: 'e20',
                name: 'Xenon-133',
                symbol: 'Xe-133',
                period: 5,
                group: 18,
                atomicNumber: 54,
                atomicWeight: 132.905,
                halfLife: '5.2475days',
                productionMethod: 'Reactor Produced',
                energyType: 'Beta, Gamma',
                oxidationstate:'6,4,2',
                parentRadionuclide:'I-133',
                decayproduct:'Cs-133',
                naturalstructure:'Face centred cubic crystal (FCC)',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Xenon133.jpg')
                
            }
        
        ],
    },
    {
        id: '2',
        image: images.therapeutic,
        name: 'Therapeutic Radioisotope',
        date: 'General',
        elements: [
            {
                id: 'e1',
                name: 'Phosphor-32',
                symbol: 'P-32',
                period: 3,
                group: 15,
                atomicNumber: 15,
                atomicWeight: 31.97,
                halfLife: '14.3',
                productionMethod:'Reactor produced',
                energyType: 'βˉ',
                oxidationstate:-3,
                parentRadionuclide:'Si-32',
                decayproduct:'S-32',
                naturalstructure:'Cubic crystal structure ',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/phosphorus32.png')
               
                // ... other details
            },
            {
                id: 'e2',
                name: 'Scandium-47',
                symbol: 'Sc-47',
                period:4,
                group:3,
                atomicNumber:21,
                atomicWeight:46.95,
                halfLife: '3.3',
                productionMethod:'Reactor produced (47Ti9(n,p)47Sc)',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Ca-47',
                decayproduct:'Ti-47',
                naturalstructure:'α- Close packed hexagonal,β- Body centered cubic',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Scandium47.jpg')
                

                // ... other details
            },
            {
                id: 'e3',
                name: 'Copper-67',
                symbol: 'Cu-67',
                period:4,
                group:11,
                atomicNumber:29,
                atomicWeight:63.929,
                halfLife: '2.6',
                productionMethod: 'Reactor produced(67Zn(n,p)67Cu)',
                energyType: 'βˉ',
                oxidationstate:2,
                parentRadionuclide:'Ni-67',
                decayproduct:'Zn-67',
                naturalstructure:'FCC',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Copper67.jpg')
               
                // ... other details
            },

            {
                id: 'e4',
                name: 'Gallium-67',
                symbol: 'Ga-67',
                period:4,
                group:13,
                atomicNumber:31,
                atomicWeight:66.92,
                halfLife: '9.3',
                productionMethod: 'Cyclotron',
                energyType: 'Aug',
                oxidationstate:3,
                parentRadionuclide:'Ge-67',
                decayproduct:'Zn-67',
                naturalstructure:'Orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Gallium67.png')
               
                // ... other details
            },

            {
                id: 'e5',
                name: 'Astatine-77',
                symbol: 'As-77',
                period:6,
                group:17,
                atomicNumber:85,
                atomicWeight:210.98,
                halfLife: '7.214hrs',
                productionMethod:'cyclotron irradiation of 209Bi',
                energyType: 'Alpha',
                oxidationstate:-11357,
                parentRadionuclide:'Fr215, At-211m, Rn-211',
                decayproduct:'Po211, Bi207',
                naturalstructure:'Orthorhombic Crystalline',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Astatine77.jpg')
               
                // ... other details
            },

            {
                id: 'e6',
                name: 'Strontium-89',
                symbol: 'Sr-89',
                period:5,
                group:2,
                atomicNumber:38,
                atomicWeight:88.9,
                halfLife: '50.5',
                productionMethod:'Reactor Produced (89Y(n,p)89Sr)',
                energyType:'βˉ',
                oxidationstate:2,
                parentRadionuclide:'Rb-89',
                decayproduct:'Y-89',
                naturalstructure:'FCC',
                decayimage:''
               
                // ... other details
            },

            {
                id:'e7',
                name:'Yttrium-90',
                symbol: 'Y-90',
                period:5,
                group: 3,
                atomicNumber: 39,
                atomicWeight: 88.9,
                halfLife: '2.7',
                productionMethod: 'Nuclear decay of Sr90',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Sr-90,Y-90m',
                decayproduct:'Zr-90',
                naturalstructure:'α- Close packed hexagonal,β- Body centered cubic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Yttrium90.png')
               
                // ... other details
            },


            {
                id: 'e8',
                name: 'Rhodium-105',
                symbol: 'Rh-105',
                period: 5,
                group: 9,
                atomicNumber: 45,
                atomicWeight: 104.9,
                halfLife: '1.5',
                productionMethod: 'Cyclotron,Reactor produced(104Ru(n,y)Rh105)',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Ru-105,Rh-105m',
                decayproduct:'Pd-105',
                naturalstructure:'FCC',
                decayimage:''
               
                // ... other details
            },

            {
                id: 'e9',
                name: 'Palladium-109',
                symbol: 'Pd-109',
                period: 5,
                group: 10,
                atomicNumber: 46,
                atomicWeight: 108.9,
                halfLife: '0.6',
                productionMethod: 'Reactor produced',
                energyType: 'βˉ',
                oxidationstate:'0,2'  ,
                parentRadionuclide:'Rh-109,Pd-109m1',
                decayproduct:'Ag-109',
                naturalstructure:'FCC',
                decayimage:''
               
                // ... other details
            },

            {
                id: 'e10',
                name: 'Silver-111',
                symbol: 'Ag-111',
                period: 5,
                group: 11,
                atomicNumber: 47,
                atomicWeight: 110.9,
                halfLife: '7.5',
                productionMethod: 'Reaactor produced (nat-Pd(d,x)111Ag)',
                energyType: 'βˉ',
                oxidationstate:1  ,
                parentRadionuclide:'Pd-111,Ag-111m1,Pd-111m1',
                decayproduct:'Cd-111',
                naturalstructure:'FCC',
                decayimage:''
               
                // ... other details
            },

            {
                id: 'e11',
                name: 'Indium-111',
                symbol: 'In-111',
                period: 5,
                group: 13,
                atomicNumber: 49,
                atomicWeight: 110.9,
                halfLife: '2.8',
                productionMethod: 'Cyclotron (112Cd(p,2n)111In)',
                energyType: 'Aug',
                oxidationstate:'1,3',
                parentRadionuclide:'Sn-111,In-111m1',
                decayproduct:'Cd-111',
                naturalstructure:'Centered tetragonal',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Indium111.png')
               
                // ... other details
            },
            {
                id: 'e12',
                name: 'Tin-117m',
                symbol: 'Sn-117m',
                period: 5,
                group: 14,
                atomicNumber: 50,
                atomicWeight:'',
                halfLife: 14,
                productionMethod: 'Reactor produced(116Sn(n,y)117mSn',
                energyType: 'CE',
                oxidationstate:'4,2',
                parentRadionuclide:' ',
                decayproduct:'Sn-117',
                naturalstructure:'Body centered tetragonal',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Tin117m.jpg')
               
                // ... other details
            },
            {
                id: 'e13',
                name: 'Iodine-123',
                symbol: 'I-123',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 122.9,
                halfLife: '13.2',
                productionMethod: 'Cyclotron (Xe125(p,2n)123I)',
                energyType: 'Aug',
                oxidationstate:-11357,
                parentRadionuclide:'Xe-123',
                decayproduct:'Te-123',
                naturalstructure:'Base centered orthorhombic',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Iodine123.jpg')
               
                // ... other details
            },


            {
                id: 'e14',
                name: 'iodine-125',
                symbol: 'I-125',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 124.9,
                halfLife: '60.1',
                productionMethod: 'Reactor produced',
                energyType: 'Aug',
                oxidationstate:-11357,
                parentRadionuclide:'Xe-125',
                decayproduct:'Te-125',
                naturalstructure:'Base centered orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/iodine125.png')
               
                // ... other details
            },


            
            {
                id: 'e15',
                name: 'Iodine-131',
                symbol: 'I-131',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: 130.9,
                halfLife: '8',
                productionMethod: 'Reactor produced',
                energyType: 'βˉ',
                oxidationstate:-11357,
                parentRadionuclide:'Te-131,Te-131m',
                decayproduct:'Xe-131',
                naturalstructure:'Base centered orthorhombic',
                decayimage: require('../assets/radioisotopeimages/diagnoticimages/Iodine131.jpg')
               
                // ... other details
            },

            {
                id: 'e16',
                name: 'Samarium-153',
                symbol: 'Sm-153',
                period:6,
                group: 'lanthanide',
                atomicNumber:62,
                atomicWeight:152.92,
                halfLife: '1.9',
                productionMethod: 'Reactor produced (152Sm(n,y)153Sm)',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Pm-153,Sm-153m',
                decayproduct:'Eu-153',
                naturalstructure:'Rhombohedral',
                decayimage:''
               
                // ... other details
            },
            {
                id: 'e17',
                name: 'Gadolinium-159',
                symbol: 'Gd-159',
                period: 6,
                group: 'lanthanide',
                atomicNumber: 64,
                atomicWeight: 158.92,
                halfLife: '0.8',
                productionMethod: 'Reactor Produced(158Gd(n,y)159Gd)',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Eu-159',
                decayproduct:'Tb-159',
                naturalstructure:'α- Hexagonal close, β-Body centered tetragonal',
                decayimage:''
               
                // ... other details
            },

            {
                id: 'e18',
                name: 'Lutetium-177',
                symbol: 'Lu-177',
                period: 6,
                group: 'lanthanide',
                atomicNumber: 71,
                atomicWeight: 176.94,
                halfLife: '6.7',
                productionMethod: 'Reactor produced',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Yb-177,Lu-177m4',
                decayproduct:'Hf-177',
                naturalstructure:'Close packed hexagonal',
                decayimage:''
               
                // ... other details
            },
            {
                id: 'e19',
                name: 'Rhenium-186',
                symbol: 'Re-186',
                period: 6,
                group:7,
                atomicNumber: 75,
                atomicWeight: 185.95,
                halfLife: '3.7',
                productionMethod: 'Reactor produced (185Re(n,y)186Re)',
                energyType: 'βˉ',
                oxidationstate:'4,7',
                parentRadionuclide:'Re-186m1',
                decayproduct:'Os-186, W-186',
                naturalstructure:'Hexagonal closed packed',
                decayimage:''
               
                // ... other details
            },

            {
                id: 'e20',
                name: 'Rhenium-188',
                symbol: 'Re-188',
                period:6,
                group: 7,
                atomicNumber: 75,
                atomicWeight: 187.95,
                halfLife: '0.7',
                productionMethod: 'Generator produced',
                energyType: 'βˉ',
                oxidationstate:'4,7',
                parentRadionuclide:'W-188,Re-188m',
                decayproduct:'Os-188',
                naturalstructure:'Hexagonal closed packed',
                decayimage:''
               
                // ... other details
            },
        ],
    },
    {
        id: '3',
        image: images.theranostic,
        name: 'Theranostic Radioisotope',
        date: 'General',
        elements: [
            {
                id: 'e1',
                name: 'Scandium-47',
                symbol: 'Sc-47',
                period:4,
                group: 3,
                atomicNumber:21,
                atomicWeight:46.95,
                halfLife: '3.3',
                productionMethod: 'Reactor produced (47Ti9(n,p)47Sc)',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Ca-47',
                decayproduct:'Ti-47',
                naturalstructure:'α- Close packed hexagonal,β- Body centered cubic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Scandium47.jpg')
            },
            {
                id: 'e2',
                name: 'Copper-67',
                symbol: 'Cu-67',
                period:4,
                group:11,
                atomicNumber:29,
                atomicWeight:66.92,
                halfLife: '2.6',
                productionMethod: 'Reactor produced(67Zn(n,p)67Cu)',
                energyType: 'βˉ',
                oxidationstate:12,
                parentRadionuclide:'Ni-67',
                decayproduct:'Zn-67',
                naturalstructure:'FCC',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Copper67.jpg')
            },
            {
                id: 'e3',
                name: 'Gallium-67',
                symbol: 'Ga-67',
                period:4,
                group:13,
                atomicNumber:31,
                atomicWeight:66.92,
                halfLife: '3.3',
                productionMethod: 'Cyclotron',
                energyType: 'Aug',
                oxidationstate:3,
                parentRadionuclide:'Ge-67',
                decayproduct:'Zn-67',
                naturalstructure:'Orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Gallium67.png')
            },
            {
                id: 'e4',
                name: 'Indium-111',
                symbol: 'In-111',
                period:5,
                group:13,
                atomicNumber:49,
                atomicWeight:110.9,
                halfLife: '2.8',
                productionMethod: 'Cyclotron (112Cd(p,2n)111In)',
                energyType: 'Aug',
                oxidationstate:'1,3',
                parentRadionuclide:'Sn-111,In-111m1',
                decayproduct:'Cd-111',
                naturalstructure:'Centered tetragonal',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Indium111.png')
            },  
            {
                id: 'e5',
                name: 'Tin-117m',
                symbol: 'Sn-117m',
                period:5,
                group:14,
                atomicNumber:50,
                atomicWeight:'',   //value not given
                halfLife: '14',
                productionMethod: 'Reactor produced(116Sn(n,y)117mSn',
                energyType: 'CE',
                oxidationstate:'4,2',
                parentRadionuclide:' ',//not given
                decayproduct:'Sn-117',
                naturalstructure:'Body centered tetragonal',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Tin117m.jpg')
            },   
            {
                id: 'e6',
                name: 'Iodine-123',
                symbol: 'I-123',
                period:5,
                group:17,
                atomicNumber:53,
                atomicWeight:'122.9',  
                halfLife: '13.2',
                productionMethod: 'Cyclotron (Xe125(p,2n)123I)',
                energyType: 'Aug',
                oxidationstate:-11357,
                parentRadionuclide:'Xe-123',
                decayproduct:'Te-123',
                naturalstructure:'Base centered orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Iodine123.jpg')
            },  
            {
                id: 'e7',
                name: 'Iodine-131',
                symbol: 'I-131',
                period:5,
                group:17,
                atomicNumber:53,
                atomicWeight:'130.9',  
                halfLife: '8days',
                productionMethod: 'Reactor produced',
                energyType: 'βˉ',
                oxidationstate:-11357,
                parentRadionuclide:'Te-131,Te-131m',
                decayproduct:'Xe-131',
                naturalstructure:'Base centered orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Iodine131.jpg')
            },             
            {
                id: 'e8',
                name: 'Samarium-153',
                symbol: 'Sm-153',
                period: 6,
                group: 'lanthanide',
                atomicNumber: 62,
                atomicWeight: 152.92,
                halfLife: 1.9,
                productionMethod: 'Reactor produced (152Sm(n,y)153Sm)',
                energyType: 'βˉ',
                oxidationstate:3,
                parentRadionuclide:'Pm-153,Sm-153m',
                decayproduct:'Eu-153',
                naturalstructure:'Rhombohedral',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Samarium153.jpg')
                
            },
            {
                id: 'e9',
                name: 'Astatine-77',
                symbol: 'As-77',
                period: 6,
                group: 17,
                atomicNumber: 85,
                atomicWeight: 76.92,
                halfLife: 1.6,
                productionMethod: '',
                energyType: 'βˉ',
                oxidationstate:-123,
                parentRadionuclide:'Ge-77,As-77m,Ge-77m',
                decayproduct:'Se-77',
                naturalstructure:'Orthorhombic Crystalline',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Astatine77.jpg')
                
            },
            {
                id: 'e10',
                name: 'Bismuth-213',
                symbol: 'Bi-213',
                period: 6,
                group: 15,
                atomicNumber: 83,
                atomicWeight: 213,
                halfLife: '45.59mins',
                productionMethod: 'Single-column "direct" 225Ac/213Bi generator with AG MP-50 resin',
                energyType: 'βˉ,α,γ',
                oxidationstate:'3,5',
                parentRadionuclide:'Pb213, At217',
                decayproduct:'Po213,Tl209',
                naturalstructure:'Rhombohedral lattice',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Bismuth213.jpg')
                
            },
            {
                id: 'e11',
                name: 'Scandium-44/Scandium-47',
                symbol: 'Sc-44/Sc-47',
                period: 4,
                group: 3,
                atomicNumber: 21,
                atomicWeight: '43.95/46.95',
                halfLife: '4.0420hrs/3.3492days',
                productionMethod: 'Nuclear reactor producedCa(p,n)44Sc/Reactor produced (47Ti9(n,p)47Sc)',
                energyType: 'β+,γ/βˉ',
                oxidationstate: 3,
                parentRadionuclide:'Ti44, Sc44m',
                decayproduct:'Ca44',
                naturalstructure:'α- Close packed hexagonal,β- Body centered cubic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Scandium44Scandium47.jpg')
                
            },
            {
                id: 'e12',
                name: 'Copper-64/Copper67',
                symbol: 'Cu-64/ Cu-67',
                period: 4,
                group: 11,
                atomicNumber: 29,
                atomicWeight: '63.929/66.927',
                halfLife: '12.70hrs/61.83hrs',
                productionMethod: 'Nuclear reactor 64Ni(p,n)64Cu and accelarator produced / Reactor produced(67Zn(n,p)67Cu)',
                energyType: 'β+,β-/β-',
                oxidationstate: 12,
                parentRadionuclide:'Ni67',
                decayproduct:'Ni64, Zn64/ Zn67',
                naturalstructure:'FCC(face centered cubic)',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Copper64Copper67.jpg')
                
            },
            {
                id: 'e13',
                name: 'Gallium-68/Gallium-67',
                symbol: 'Ga-68/Ga-67',
                period: 4,
                group: 13,
                atomicNumber: 31,
                atomicWeight: '67.927/66.928',
                halfLife: '67.71mins/3.2617days',
                productionMethod: 'generator produced/ Cyclotron',
                energyType: 'β+/γ',
                oxidationstate: 3,
                parentRadionuclide:'Ge67/ Ge68',
                decayproduct:'Zn67/Zn68',
                naturalstructure:'Orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Gallium67.png')
                
            },
            {
                id: 'e14',
                name: 'Yttrium-86/Yttrium-90',
                symbol: 'Y-86/Y-90',
                period: 5,
                group: 3,
                atomicNumber: 39,
                atomicWeight: '85.914/89.90',
                halfLife: '14.74hrs/64.05hrs',
                productionMethod: 'Cyclotron 86Sr(p n)86Y/ Generator 90Zr(n, p)90Y',
                energyType: 'β+/ β-',
                oxidationstate: 3,
                parentRadionuclide:'Zr86, Y86m /Sr90, Y90m',
                decayproduct:'Sr86/ Zr90',
                naturalstructure:'α- Close packed hexagonal,β- Body centered cubic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Yttrium86Yttrium90.jpg')
                
            },
            {
                id: 'e15',
                name: 'Iodine-124/Iodine-131',
                symbol: 'I-124/I-131',
                period: 5,
                group: 17,
                atomicNumber: 53,
                atomicWeight: '123.906/130.9',
                halfLife: '4.1760days/8days',
                productionMethod: 'Cyclotron / Reactor produced',
                energyType: 'β+/ β-',
                oxidationstate: -11357,
                parentRadionuclide:'Te-131,Te-131m',
                decayproduct:'Te124/Xe131',
                naturalstructure:'Base centered orthorhombic',
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Iodine124.jpg')
                
            },
        ],
    },
    {
        id: '4',
        image: images.nonclinical,
        name: 'Non Clinical Radioisotope',
        date: 'General',
    },
]

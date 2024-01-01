import { images } from "../constants";
import radioisotopeimages from "./radioisotopeimages";

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
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Picture1.jpg')
                // ... other details
            },
            {
                id: 'e2',
                name: 'Copper62',
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
                naturalstructure:'Face centred cubic crystal (FCC)'

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
                naturalstructure:'Face centred cubic crystal (FCC)'
                // ... other details
            },

            // ... other elements
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
                decayimage:require('../assets/radioisotopeimages/diagnoticimages/Picture1.jpg')
                // ... other details
            },
            {
                id: 'e2',
                name: 'Copper62',
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
                naturalstructure:'Face centred cubic crystal (FCC)'

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
                naturalstructure:'Face centred cubic crystal (FCC)'
                // ... other details
            },

            // ... other elements
        ],
    },
    {
        id: '3',
        image: images.theranostic,
        name: 'Theranostic Radioisotope',
        date: 'General',
    },
    {
        id: '4',
        image: images.nonclinical,
        name: 'Non Clinical Radioisotope',
        date: 'General',
    },
]
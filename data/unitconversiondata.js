// export const UnitConversionOptions = [
//     {
//         id: '1',
//         name: 'Activity',
//         units: [
//             { id: '1', sourceUnit: 'Bq', destinationUnit: 'GBq' },
//             { id: '2', sourceUnit: 'GBq', destinationUnit: 'MBQ' },
//             { id: '3', sourceUnit: 'MBq', destinationUnit: 'kBq' },
//             { id: '4', sourceUnit: 'KBq', destinationUnit: 'KCi' },

//             // Additional unit for "Activity"
//             // Add other source and destination units for "Activity"
//         ],
//     },
//     {
//         id: '2',
//         name: 'Absorbed Dose',
//         units: [
//             { id: '1', sourceUnit: 'Gy', destinationUnit: 'mGy' },
//             { id: '2', sourceUnit: 'mGy', destinationUnit: 'microGy' },
//             { id: '3', sourceUnit: 'microGy', destinationUnit: 'rd' },
//             { id: '4', sourceUnit: 'rd', destinationUnit: 'mrd' },
//             { id: '5', sourceUnit: 'mrd', destinationUnit: 'micrord' },
//             { id: '6', sourceUnit: 'micrord', destinationUnit: 'J/Kg' },
//             { id: '7', sourceUnit: 'J/Kg', destinationUnit: 'mJ/Kg' },
//             { id: '8', sourceUnit: 'mJ/Kg', destinationUnit: 'microJ/Kg' },
//             { id: '9', sourceUnit: 'microJ/Kg', destinationUnit: 'Gy' },
//             // Add other source and destination units for "Absorbed Dose"
//         ],
//     },
//     {
//         id: '3',
//         name: 'Equivalent Dose , Effective Dose',
//         units: [
//             { id: '1', sourceUnit: 'Sv', destinationUnit: 'mSv' },
//             { id: '2', sourceUnit: 'mSv', destinationUnit: 'microSv' },
//             { id: '3', sourceUnit: 'microSv', destinationUnit: 'rem' },
//             { id: '4', sourceUnit: 'rem', destinationUnit: 'mrem' },
//             { id: '5', sourceUnit: 'mrem', destinationUnit: 'microrem' },
//             { id: '6', sourceUnit: 'microrem', destinationUnit: 'Sv' },
//             // Add other source and destination units for "Equivalent Dose , Effective Dose"
//         ],
//     },
//     // Add other conversion types and their respective units
//     // ...

//     {
//         id: '4',
//         name: 'Exposure',
//         units: [
//             { id: '1', sourceUnit: 'C/kg', destinationUnit: 'R' },
//             { id: '2', sourceUnit: 'R', destinationUnit: 'C/kg' },
//         ],
//     },

//     {
//         id: '5',
//         name: 'Energy',
//         units: [
//             { id: '1', sourceUnit: 'J', destinationUnit: 'eV' },
//             { id: '2', sourceUnit: 'eV', destinationUnit: 'J' },
//         ],
//     },

//     {
//         id: '6',
//         name: 'Weight',
//         units: [
//             { id: '1', sourceUnit: 'kgs', destinationUnit: 'lbs' },
//             { id: '2', sourceUnit: 'lbs', destinationUnit: 'kg' },
//         ],
//     },

//     {
//         id: '7',
//         name: 'Height',
//         units: [
//             { id: '1', sourceUnit: 'inches', destinationUnit: 'cm' },
//             { id: '2', sourceUnit: 'cm', destinationUnit: 'inches' },
//         ],
//     },
//     {
//         id: '8',
//         name: 'Temperature',
//         units: [
//             { id: '1', sourceUnit: 'F', destinationUnit: 'C' },
//             { id: '2', sourceUnit: 'C', destinationUnit: 'F' },
//         ],
//     },
//     {
//         id: '9',
//         name: 'Liquid',
//         units: [{ id: '1', sourceUnit: 'Ounce', destinationUnit: 'mL' },
//         { id: '2', sourceUnit: 'mL', destinationUnit: 'Ounce' }],
//     },
// ]

export const UnitConversionOptions = [
    {
        id: '1',
        name: 'Activity',
        units: [
            { id: '1', sourceUnit: 'Bq', destinationUnit: 'GBq' },
            { id: '2', sourceUnit: 'GBq', destinationUnit: 'mBq' },
            { id: '3', sourceUnit: 'mBq', destinationUnit: 'kBq' },
            { id: '4', sourceUnit: 'kBq', destinationUnit: 'kCi' },
            { id: '5', sourceUnit: 'mCi', destinationUnit: 'Ci' },
            { id: '6', sourceUnit: 'Ci', destinationUnit: 'mCi' },
            { id: '7', sourceUnit: 'pCi', destinationUnit: 'µCi' },
            { id: '8', sourceUnit: 'µCi', destinationUnit: 'pCi' },
            { id: '9', sourceUnit: 'kCi', destinationUnit: 'dpm' },
            { id: '10', sourceUnit: 'dpm', destinationUnit: 'Bq' },
            { id: '10', sourceUnit: 'MBq', destinationUnit: 'dps' },
            { id: '10', sourceUnit: null, destinationUnit: 'MBq' },

            // Additional unit for "Activity"
            // Add other source and destination units for "Activity"
        ],
    },
    {
        id: '2',
        name: 'Absorbed Dose',
        units: [
            { id: '1', sourceUnit: 'Gy', destinationUnit: 'mGy' },
            { id: '2', sourceUnit: 'mGy', destinationUnit: 'µGy' },
            { id: '3', sourceUnit: 'µGy', destinationUnit: 'rd' },
            { id: '4', sourceUnit: 'rd', destinationUnit: 'mrd' },
            { id: '5', sourceUnit: 'mrd', destinationUnit: 'µrd' },
            { id: '6', sourceUnit: 'µrd', destinationUnit: 'J/Kg' },
            { id: '7', sourceUnit: 'J/Kg', destinationUnit: 'mJ/Kg' },
            { id: '8', sourceUnit: 'mJ/Kg', destinationUnit: 'µJ/Kg' },
            { id: '9', sourceUnit: 'µJ/Kg', destinationUnit: 'Gy' },
            // Add other source and destination units for "Absorbed Dose"
        ],
    },
    {
        id: '3',
        name: 'Equivalent Dose , Effective Dose',
        units: [
            { id: '1', sourceUnit: 'Sv', destinationUnit: 'mSv' },
            { id: '2', sourceUnit: 'mSv', destinationUnit: 'µSv' },
            { id: '3', sourceUnit: 'µSv', destinationUnit: 'rem' },
            { id: '4', sourceUnit: 'rem', destinationUnit: 'mrem' },
            { id: '5', sourceUnit: 'mrem', destinationUnit: 'µrem' },
            { id: '6', sourceUnit: 'µrem', destinationUnit: 'Sv' },
            // Add other source and destination units for "Equivalent Dose , Effective Dose"
        ],
    },
    // Add other conversion types and their respective units
    // ...

    {
        id: '4',
        name: 'Exposure Dose',
        units: [
            { id: '1', sourceUnit: 'C/Kg', destinationUnit: 'R' },
            { id: '2', sourceUnit: 'R', destinationUnit: 'C/Kg' },
        ],
    },

    {
        id: '5',
        name: 'Energy',
        units: [
            { id: '1', sourceUnit: 'J', destinationUnit: 'eV' },
            { id: '2', sourceUnit: 'eV', destinationUnit: 'J' },
        ],
    },

    {
        id: '6',
        name: 'Weight',
        units: [
            { id: '1', sourceUnit: 'kg', destinationUnit: 'lbs' },
            { id: '2', sourceUnit: 'lbs', destinationUnit: 'kg' },
        ],
    },

    {
        id: '7',
        name: 'Height',
        units: [
            { id: '1', sourceUnit: 'inches', destinationUnit: 'cm' },
            { id: '2', sourceUnit: 'cm', destinationUnit: 'inches' },
        ],
    },
    {
        id: '8',
        name: 'Temperature',
        units: [
            { id: '1', sourceUnit: 'F', destinationUnit: 'C' },
            { id: '2', sourceUnit: 'C', destinationUnit: 'F' },
        ],
    },
    {
        id: '9',
        name: 'Liquid',
        units: [
            { id: '1', sourceUnit: 'Ounce', destinationUnit: 'ML' },
            { id: '2', sourceUnit: 'ML', destinationUnit: 'Ounce' },
        ],
    },
]

// export const ADB = [
//     {
//         id: '1',

//         name: 'OCCUPATIONAL DOSE LIMIT',
//         tableData: [
//             [
//                 '1',
//                 'Effective Dose for Whole body',
//                 '20',
//                 'mSv/yr (averaged over for consecutive 5years)',
//             ],
//             ['2', 'Extremeties', '500', 'mSv/yr'],
//             ['3', 'Skin', '500', 'Msv/yr'],
//         ],
//         tableHead: ['Sl no', 'Character', 'Dose Limit', 'Unit'],
//     },
//     {
//         id: '2',

//         name: 'APPRENTICES AND TRAINEES BETWEEN 16 TO 18 YEAR AGE',
//     },
//     {
//         id: '3',

//         name: 'DOSE LIMIT FOR PUBLIC',
//     },
// ]

export const ADB = [
    {
        id: '1',

        name: 'OCCUPATIONAL DOSE LIMIT',
        tableData: [
            [
                '1',
                'Effective Dose for Whole body',
                '20',
                'mSv/yr (averaged over for consecutive 5years)',
            ],
            ['2', 'Extremeties', '500', 'mSv/yr'],
            ['3', 'Skin', '500', 'Msv/yr'],
        ],
        tableHead: ['Sl no', 'Character', 'Dose Limit', 'Unit'],
    },

    {
        id: '2',

        name: 'APPRENTICES AND TRAINEES BETWEEN 16 TO 18 YEAR AGE',
        tableData: [
            ['1', 'Effective Dose for Whole body', '6', 'mSv/yr'],
            ['2', 'eye lens', '50', 'mSv/yr'],
            ['3', 'Extremeties', '150', 'mSv/yr'],
            ['4', 'Skin', '150', 'Msv/yr'],
        ],
        tableHead: ['Sl no', 'Character', 'Dose Limit', 'Unit'],
    },

    {
        id: '3',

        name: 'DOSE LIMIT FOR PUBLIC',
        tableData: [
            ['1', 'Effective Dose for Whole body', '1', 'mSv/yr'],
            ['2', 'eye lens', '15', 'mSv/yr'],
            ['3', 'Skin', '50', 'mSv/yr'],
            ['4', 'Dose constainer', '5', 'Msv/yr'],
            ['5', 'embryo/fetus', '1', 'mSv/yr'],
        ],
        tableHead: ['Sl no', 'Character', 'Dose Limit', 'Unit'],
    },

    {
        id: '4',

        name: 'GUIDELINE FOR UNSEALED SOURCES',
        tableData: [
            [
                '1',
                'group1',
                'U-232, U-234, Ac-227, Th-227',
                'Equal to or <5µci',
                'Equal to or <5mci',
                '>5mci',
            ],
            [
                '2',
                'group2',
                'I-131, Na-22, Ac- 56, Y-91',
                'Equal to or <50µci',
                'Equal to or <50mci',
                '>50mci',
            ],
            [
                '3',
                'group3',
                'Co-57, Ba-131, Lu-177, F-18, Tc-99, Mo99',
                'Equal to or <500µci ',
                'Equal to or <500mci',
                '>500mci',
            ],
            [
                '4',
                'group4',
                'Y-91m, Cs-135, H-3, O-15, Tc-99m',
                'Equal to or <500µci',
                'Equal to or <500mci',
                '>500mci',
            ],
        ],
        tableHead: [
            'Sl no',
            'Unsealed source group based on  radiotoxicity',
            'Unsealed sources',
            'Dose limit  type1',
            'Dose limit type2',
            'Dose limit  type3',
        ],
    },

    {
        id: '5',

        name: 'RADIOLOGICAL SAFETY CRITERIA',
        tableData: [
            ['1', 'Delay and decay tank', '0.6', 'µ Ci/lit'],
            [
                '2',
                'The radiation level in normal, full-occupancy areas',
                '>1',
                'µSv/h',
            ],
            [
                '3',
                'The ventilation design ( the air concentration in full occupancy areas)',
                '1/10th',
                'derived air concentration (DAC) values',
            ],
        ],
        tableHead: ['Sl no', 'Heading1', 'Heading2', 'Heading3'],
    },

    {
        id: '6',

        name: 'RADIATION HANDLING FACILTY LIMITS',
        tableData: [
            ['1', 'WHITE', 'NO ACITIVITY'],
            [
                '2',
                'GREEN ',
                'Radiation level:< 1µSv/h  Airborne activity:<0.1 DAC(derived air concentration)  area contamination :<0.1 DWL derived working level',
            ],
            ['3', 'AMBER', 'Airborne activity: < 1 DWL'],
            ['4', 'RED  ', 'As specified by RSO'],
        ],
        tableHead: [
            'Sl no',
            'Zoning of areas',
            'Spread of Contamination(Radiation Level)',
        ],
    },

    {
        id: '7',

        name: 'DISCHARGE AND DISPOSAL LIMITS',
        tableData: [
            [
                '1',
                'Radioactive disposal to the sewerage system',
                '100',
                'µSv/y',
            ],
            [
                '2',
                'radiation dose rate at any point on the sewerage - line',
                '>1',
                'µSv/hr',
            ],
        ],
        tableHead: ['Sl no', 'Character', 'Dose limit', 'Unit'],
    },
]

import { images } from "../constants";
export const calculatorOptions = [
    {
        id: 1,
        name: 'Biological \n Half Life',
        image: images.halfLife,
        navigate:'BiologicalHL'
    },
    {
        id: 2,
        name: 'Sensitivity',
        image: images.sensitivity,
        navigate:'CalculateSensitivity'
    },
    {
        id: 3,
        name: 'Paediatric \n dose',
        image: images.child,
        navigate:'CalculatePD'
    },
    {
        id: 4,
        name: 'More',
        image: images.more,
        navigate:'Calculator'
    },
]
export const morecalculatorOptions = [
    {
        id: 1,
        name: 'Biological \nHalf Life',
        image: images.halfLife,
        navigate:'BiologicalHL',
        options:[
            {
                id:'1',
                name:'Calculate Te',
                navigate:'CalculateTe'
            },
            {
                id:'2',
                name:'Calculate Tb',
                navigate:'CalculateTb'
            },
           
        ]
    },
    {
        id: 2,
        name: 'Volume to \ndraw up(in ml)',
        image: images.elution,
        navigate:'Volumedraw'
    },
    {
        id: 3,
        name: 'Cardiac \nfunctions',
        image: images.cardiac,
        navigate:'Cardiacfunction',
        options:[
            {
                id:'1',
                name:'Target Heart Rate',
                navigate:'CalculateTargetHeartRate'
            },
            {
                id:'2',
                name:'% Ejection fraction',
                navigate:'CalculateEjection'
            },
            {
                id:'3',
                name:'Stroke volume ',
                navigate:'StrokeVolume'
            },
            {
                id:'4',
                name:'Cardiac output ',
                navigate:'CardiacOutput'
            },
        ]
    },
    {
        id: 4,
        name: 'Inverse\nsquare law',
        image: images.inversesl,
        navigate:'InverseSL',
        options:[
            {
                id:'1',
                name:'Calculate Intensity 1',
                navigate:'CalculateI1'
            },
            {
                id:'2',
                name:'Calculate Distance 1²',
                navigate:'CalculateD1'
            },
            {
                id:'3',
                name:'Calculate Intensity 2',
                navigate:'CalculateI2'
            },
            {
                id:'4',
                name:'Calculate Distance 2²',
                navigate:'CalculateD2'
            },
        ]
    },
    {
        id: 5,
        name: 'Concentration',
        image: images.concentration,
        navigate:'CalculateConcentration',
        options:[
            {
                id:'1',
                name:'Calculate C1',
                navigate:'CalculateC1'
            },
            {
                id:'2',
                name:'Calculate V1',
                navigate:'CalculateV1'
            },
            {
                id:'3',
                name:'Calculate C2',
                navigate:'CalculateC2'
            },
            {
                id:'4',
                name:'Calculate V2',
                navigate:'CalculateV2'
            },
        ]
    },

    {
        id: 9,
        name: 'Sensitivity',
        image: images.sensitivity,
        navigate:'CalculateSensitivity'
    },
  
    {
        id: 7,
        name: 'Shielding ',
        image: images.shielding,
        navigate:'Shielding',
     
    },
    {
        id: 6,
        name: 'Doses \nConcentration',
        image: images.PD,
        navigate:'DosesConcentration',
        options:[
            {
                id:'1',
                name:'Decay concentration',
                navigate:'CalculateDecayConcentration'
            },
            {
                id:'2',
                name:'Draw from concentration',
                navigate:'DrawConcentration'
            },
           
        ]
    },
    {
        id: 8,
        name: 'Paediatric \ndose',
        image: images.child,
        navigate:'CalculatePD'
    },
   
    {
        id: 10,
        name: 'Decay factor',
        image: images.decay,
        navigate: 'DecayFactor',
        options:[
            {
                id:'1',
                name:'Calculate Λ for Mo99',
                
                value:0.0105,
                navigate:'CalculateDF'
            },
            {
                id:'2',
                name:'Calculate Λ for Tc99m',
                value:0.1155 ,
                navigate:'CalculateDF'
            },
            {
                id:'3',
                name:'Calculate Λ for F18',
                value:0.3780 ,
                navigate:'CalculateDF'
            },
            {
                id:'4',
                name:'Calculate Λ for Y90',
                value:0.01069,
                navigate:'CalculateDF'
            },
            {
                id:'5',
                name:'Calculate Λ for Lu177',
                value:0.004309,
                navigate:'CalculateDF'
            },
            {
                id:'6',
                name:'Calculate Λ for C11',
                value:2.0442,
                navigate:'CalculateDF'
            },
            {
                id:'7',
                name:'Calculate Λ for Ga68',
                value:0.6116,
                navigate:'CalculateDF'
            },
            {
                id:'8',
                name:'Calculate Λ for Ga67',
                value:0.00875,
                navigate:'CalculateDF'
            },
            {
                id:'9',
                name:'Calculate Λ for Re188',
                value:0.04100,
                navigate:'CalculateDF'
            },
        ]
    },
    {
        id: 11,
        name: 'Endocrine',
        image: images.endocrine,
        navigate:'Endocrine',
        options:[
            {
                id:'1',
                name:'Percentage radioactive iodine thyroid uptake',
                navigate:'CalculateRAIU'
            },
            {
                id:'2',
                name:'I-131 Administered dose',
                navigate:'CalculateAdministeredDose'
            },
           
        ]
    },

    {
        id: 12,
        name: 'Genitourinary',
        image: images.genitournary,
        navigate:'Genitournary',
        options:[
            {
                id:'1',
                name:'Clearance',
                navigate:'CalculateClearance'
            },
            {
                id:'2',
                name:'Filling phase',
                navigate:'CalculateFillingPhase'
            },
           
        ]
    },
    {
        id: 13,
        name: '    Pet \nOncology',
        image: images.pet,
        navigate:'PetOncology',
        options:[
            {
                id:'1',
                name:'SUV',
                navigate:'Calculate'
            },
        ]
    },
    {
        id: 14,
        name: 'Gastrointestinal',
        image: images.Gastrointestinal,
        navigate:'Gastrointestinal',
        options:[
            {
                id:'1',
                name:'Percentage retention of semisolid meal',
                navigate:'Calculate'
            },
        ]
    },
    {
        id: 15,
        name: 'Infection and \nInflammation',
        image: images.infection,
        navigate:'Infection',
        options:[
            {
                id:'1',
                name:'Labeling efficiency',
                navigate:'Calculate'
            },
        ]
    },
    // {
    //     id: 16,
    //     name: 'Extra Formulas',
    //     image: images.more,
    //     navigate:'Extraformulas',
    //     options:[
    //         {
    //             id:'1',
    //             name:'Net Counts',
    //             navigate:'NetCounts'
    //         },
    //         {
    //             id:'2',
    //             name:'Administered counts',
    //             navigate:'AdministeredCounts'
    //         },
    //         {
    //             id:'3',
    //             name:'Activity calculation',
    //             navigate:'Activity'
    //         },
    //         {
    //             id:'4',
    //             name:'Elution efficiency',
    //             navigate:'ElutionEfficiency'
    //         },
           
    //     ]
    // },
    {
        id: 16,
        name: 'Net Counts',
        image: images.netcounts,
        navigate:'NetCounts',
       
    },
    {
        id: 17,
        name: 'Administered \n counts',
        image: images.AdministeredCounts,
        navigate:'AdministeredCounts',
       
    },
    {
        id: 18,
        name: 'Activity\ncalculation',
        image: images.AC,
        navigate:'Activity',
       
    },
    {
        id: 19,
        name: 'Elution \nefficiency',
        image: images.ellution,
        navigate:'ElutionEfficiency',
       
    },
]
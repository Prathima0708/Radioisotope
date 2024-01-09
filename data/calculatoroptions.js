// import { images } from "../constants";

// export const calculatorOptions = [
//     {
//         id: 1,
//         name: 'Half Life',
//         image: images.halfLife,
//         navigate:'Calculate'
//     },
//     {
//         id: 2,
//         name: 'Elution',
//         image: images.elution,
//         navigate:'Calculate'
//     },
//     {
//         id: 3,
//         name: 'Paediatric \n dose',
//         image: images.PD,
//         navigate:'Calculate'
//     },
//     {
//         id: 4,
//         name: 'More',
//         image: images.more,
//         navigate:'Calculator'
//     },
// ]



// export const morecalculatorOptions = [
//     {
//         id: 1,
//         name: 'Biological \n Half Life',
//         image: images.halfLife,
//         navigate:'CalculatePD'
//     },
//     {
//         id: 2,
//         name: 'Inverse\nSquare Law',
//         image: images.elution,
//         navigate:'InverseSL'
//     },
//     {
//         id: 3,
//         name: 'Paediatric \n dose',
//         image: images.PD,
//         navigate:'CalculatePD'
//     },
//     {
//         id: 4,
//         name: 'Sensitivity ',
//         image: images.PD,
//         navigate:'CalculateSensitivity'
//     },
//     {
//         id: 5,
//         name: 'Cardiac \n functions',
//         image: images.PD,
//         navigate:'Cardiacfunction',
//         options:[
//             {
//                 id:'1',
//                 name:'Target Heart Rate',
//                 navigate:'CalculateTargetHeartRate'
//             },
//             {
//                 id:'2',
//                 name:'% Ejection fraction',
//                 navigate:'CalculateEjection'
//             },
//             {
//                 id:'3',
//                 name:'Stroke volume ',
//                 navigate:'StrokeVolume'
//             },
//             {
//                 id:'4',
//                 name:'Cardiac output ',
//                 navigate:'CardiacOutput'
//             },
//         ]
//     },
//     {
//         id: 6,
//         name: 'Shielding ',
//         image: images.PD,
//         navigate:'Shielding'
//     },
  
// ]




import { images } from "../constants";

export const calculatorOptions = [
    {
        id: 1,
        name: 'Half Life',
        image: images.halfLife,
        navigate:'Calculate'
    },
    {
        id: 2,
        name: 'Elution',
        image: images.elution,
        navigate:'Calculate'
    },
    {
        id: 3,
        name: 'Paediatric \n dose',
        image: images.PD,
        navigate:'Calculate'
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
        name: 'Biological \n Half Life',
        image: images.halfLife,
        navigate:'CalculatePD'
    },
    {
        id: 2,
        name: 'Inverse\nSquare Law',
        image: images.elution,
        navigate:'InverseSL'
    },
    {
        id: 3,
        name: 'Paediatric \n dose',
        image: images.PD,
        navigate:'CalculatePD'
    },
    {
        id: 4,
        name: 'Sensitivity ',
        image: images.PD,
        navigate:'CalculateSensitivity'
    },
    {
        id: 5,
        name: 'Cardiac \n functions',
        image: images.PD,
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
        id: 6,
        name: 'Shielding ',
        image: images.PD,
        navigate:'Shielding'
    },
    {
        id: 7,
        name: 'Pediatric Dose',
        image: images.halfLife,
        navigate:'CalculatePD'
    },
    {
        id: 8,
        name: 'Volume to \n draw up',
        image: images.halfLife,
        navigate:'CalculatePD'
    },
  
    {
        id: 10,
        name: 'Concentration',
        image: images.halfLife,
        navigate:'CalculatePD'
    },
    {
        id: 11,
        name: 'Doses from \n Concentrations',
        image: images.PD,
        navigate:'Cardiacfunction',
        options:[
            {
                id:'1',
                name:'Decay concentration',
                navigate:'CalculateTargetHeartRate'
            },
            {
                id:'2',
                name:'Draw from concentration',
                navigate:'CalculateEjection'
            },
           
        ]
    },
  
 
    {
        id: 14,
        name: 'Decay factor',
        image: images.PD,
        navigate: 'CalculatePD'
    },
  
]
// export const UnitConversionOptions = [
//     {
//         id:'1',
//       name: "Activity",
//       units: [
//         {id:'1', sourceUnit: "Bq", destinationUnit: "GBq" },
//         {id:'2', sourceUnit: "GBq", destinationUnit: "MBq" },
//         { id:'3',sourceUnit: "MBq", destinationUnit: "KBq" },
//         {id:'4', sourceUnit: "KBq", destinationUnit: "mBq" }, // Additional unit for "Activity"
//         // Add other source and destination units for "Activity"
//       ],
//     },
//     {
//         id:'2',
//       name: "Absorbed Dose",
//       units: [
//         { sourceUnit: "unitA", destinationUnit: "unitB" },
//         { sourceUnit: "unitC", destinationUnit: "unitD" },
//         // Add other source and destination units for "Absorbed Dose"
//       ],
//     },
//     {
//         id:'2',
//       name: "Equivalent Dose , Effective Dose",
//       units: [
//         { sourceUnit: "unitX1", destinationUnit: "unitY1" },
//         { sourceUnit: "unitX2", destinationUnit: "unitY2" },
//         // Add other source and destination units for "Equivalent Dose , Effective Dose"
//       ],
//     },
//     // Add other conversion types and their respective units
//     // ...
//   ];
  



export const UnitConversionOptions = [
  {
      id:'1',
    name: "Activity",
    units: [
      {id:'1', sourceUnit: "Bq", destinationUnit: "GBq" },
      {id:'2', sourceUnit: "GBq", destinationUnit: "MBQ"},
      {id:'3', sourceUnit: "MBq", destinationUnit: "kBq"},
      {id:'4', sourceUnit: "KBq", destinationUnit: "KCi"},
      

      // Additional unit for "Activity"
      // Add other source and destination units for "Activity"
    ],
  },
  {
      id:'2',
    name: "Absorbed Dose",
    units: [
      {id:'1', sourceUnit: "Gy", destinationUnit: "mGy" },
      {id:'2', sourceUnit: "mGy", destinationUnit: "µGy" },
      {id:'3', sourceUnit: "µGy", destinationUnit: "rd" },
      {id:'4', sourceUnit: "rd", destinationUnit: "mrd" },
      {id:'5', sourceUnit: "mrd", destinationUnit: "µrd" },
      {id:'6', sourceUnit: "µrd", destinationUnit:"J/Kg"},
      {id:'7', sourceUnit: "J/Kg", destinationUnit:"mJ/Kg"},
      {id:'8', sourceUnit: "mJ/Kg", destinationUnit:"µJ/Kg"},
      {id:'9', sourceUnit: "µJ/Kg", destinationUnit:"Gy"}
      // Add other source and destination units for "Absorbed Dose"
    ],
  },
  {
      id:'2',
    name: "Equivalent Dose , Effective Dose",
    units: [
      {id:'1', sourceUnit: "Sv", destinationUnit: "mSv" },
      {id:'2', sourceUnit: "mSv", destinationUnit: "µSv" },
      {id:'3', sourceUnit: "µSv", destinationUnit: "rem" },
      {id:'4', sourceUnit: "rem", destinationUnit:"mrem" },
      {id:'5', sourceUnit: "mrem", destinationUnit: "µrem" },
      {id:'6', sourceUnit: "µrem", destinationUnit: "Sv" },
      // Add other source and destination units for "Equivalent Dose , Effective Dose"
    ],
  },
  // Add other conversion types and their respective units
  // ...
];

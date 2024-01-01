export const UnitConversionOptions = [
    {
        id:'1',
      name: "Activity",
      units: [
        {id:'1', sourceUnit: "Bq", destinationUnit: "GBq" },
        {id:'2', sourceUnit: "GBq", destinationUnit: "MBq" },
        { id:'3',sourceUnit: "MBq", destinationUnit: "KBq" },
        {id:'4', sourceUnit: "KBq", destinationUnit: "mBq" }, // Additional unit for "Activity"
        // Add other source and destination units for "Activity"
      ],
    },
    {
        id:'2',
      name: "Absorbed Dose",
      units: [
        { sourceUnit: "unitA", destinationUnit: "unitB" },
        { sourceUnit: "unitC", destinationUnit: "unitD" },
        // Add other source and destination units for "Absorbed Dose"
      ],
    },
    {
        id:'2',
      name: "Equivalent Dose , Effective Dose",
      units: [
        { sourceUnit: "unitX1", destinationUnit: "unitY1" },
        { sourceUnit: "unitX2", destinationUnit: "unitY2" },
        // Add other source and destination units for "Equivalent Dose , Effective Dose"
      ],
    },
    // Add other conversion types and their respective units
    // ...
  ];
  
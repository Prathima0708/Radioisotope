import { images } from '../constants'

export const popularProducts = [
    {
        id: 1,
        name: 'Elegant Sofa Set',
        shop: 'Furniture Emporium',
        image: images.product1,
        price: 299.99,
    },
    {
        id: 2,
        name: 'Luxurious Bed Frame',
        shop: 'Dreamy Bedrooms',
        image: images.product2,
        price: 499.99,
    },
    {
        id: 3,
        name: 'Stylish Dining Table',
        shop: 'Fine Dining Furniture',
        image: images.product3,
        price: 199.99,
    },
    {
        id: 4,
        name: 'Artistic Home Decor Accent',
        shop: 'Creative Living',
        image: images.product4,
        price: 99.99,
    },
    {
        id: 5,
        name: 'Comfortable Office Chair',
        shop: 'Workplace Wonders',
        image: images.product5,
        price: 149.99,
    },
]

export const products = [
    {
        id: 1,
        name: 'Elegant Sofa Set',
        //shop: "Furniture Emporium",
        // image: images.product1,
        //price: 299.99
    },
    {
        id: 2,
        name: 'Luxurious Bed Frame',
        // shop: "Dreamy Bedrooms",
        // image: images.product2,
        // price: 499.99
    },
    {
        id: 3,
        name: 'Stylish Dining Table',
        // shop: "Fine Dining Furniture",
        // image: images.product3,
        // price: 199.99
    },
    {
        id: 4,
        name: 'Artistic Home Decor Accent',
        // shop: "Creative Living",
        // image: images.product4,
        // price: 99.99
    },
]

export const reviews = [
    {
        id: 1,
        image: images.avatar,
        title: 'Impressive Quality',
        description:
            'I am impressed with the quality of the furniture! It was exactly what I was looking for. Highly recommended!',
        date: '20/09/2023',
        rating: 5,
    },
    {
        id: 2,
        image: images.avatar2,
        title: 'Excellent Service',
        description:
            'The service provided by the furniture store was exceptional. The delivery was timely, and the packaging was excellent. I am happy with my furniture shopping experience.',
        date: '23/09/2025',
        rating: 5,
    },
]

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
                productionMethod: 'Cyclotron',
                energyType: 'Positron emission',
                // ... other details
            },
            {
                id: 'e2',
                name: 'Copper62',
                symbol: 'Cu',
                period: 4,
                group: 11,
                atomicNumber: 29,
                atomicWeight: 62.929,
                halfLife: '9.67 minutes',
                productionMethod: 'Cyclotron',
                energyType: 'Beta decay',
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

export const homescreenOptions = [
    {
        id: 1,
        name: 'Radioisotope Library',
        navigate: 'Radio',
    },
    {
        id: 2,
        name: 'Unit Conversion',
        navigate: 'UnitConversion',
    },
    {
        id: 3,
        name: 'Acceptable Dose Limit',
        navigate: 'AcceptableDoseLimit',
    },
    {
        id: 4,
        name: 'About Application',
        navigate: 'Aboutapplication',
    },
]

export const radioisotopeOptions = [
    {
        id: 1,
        name: 'Cyclotron',
        image: require('../assets/images/carbon.png'),
    },
    {
        id: 2,
        name: 'Generator',
        image: require('../assets/images/carbon.png'),
    },
]

export const ADB = [
    {
        id: '1',

        name: 'OCCUPATIONAL DOSE LIMIT',
        tableData : [
          ['Item 1', '111', '444'],
          ['Item 2', '333', '444'],
          ['Item 3', '666', '777'],
          ['Item 1', '111', '444'],
          ['Item 2', '333', '444'],
          ['Item 3', '666', '777'],
          ['Item 1', '111', '444'],
          ['Item 2', '333', '444'],
          ['Item 3', '666', '777'],
      ],
      tableHead : ['Type of Dose Limit', 'Limit on Dose', 'Limit on Dose']
    },
    {
        id: '2',

        name: 'APPRENTICES AND TRAINEES BETWEEN 16 TO 18 YEAR AGE',
    },
    {
        id: '3',

        name: 'DOSE LIMIT FOR PUBLIC',
    },
]

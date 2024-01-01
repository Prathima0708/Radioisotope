import { images } from "../constants"

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

export const homeCategories = [
    {
        id: 1,
        name: 'Half Life',
        image: images.halfLife,
    },
    {
        id: 2,
        name: 'Elution',
        image: images.elution,
    },
    {
        id: 3,
        name: 'Paediatric \n dose',
        image: images.PD,
    },
    {
        id: 4,
        name: 'More',
        image: images.more,
    },
]
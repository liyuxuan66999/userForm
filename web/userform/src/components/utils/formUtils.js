import { inputFieldType } from "./enums";

export const getFieldLabel = (fieldType) => {
    switch (fieldType) {
        case inputFieldType.FirstName:
            return 'First Name';
        case inputFieldType.LastName:
            return 'Last Name';
        case inputFieldType.Country:
            return 'Country';
        case inputFieldType.BirthDay:
            return 'Birth Day';
        default:
            return null;
    }
}
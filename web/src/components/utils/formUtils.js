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

export const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    const timestamp = date.getTime();
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) return false;

    return dateString === date.toISOString().split('T')[0];
};
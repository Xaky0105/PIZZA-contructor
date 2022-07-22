export function validatePhone(phone) {
    const regex = /^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    return regex.test(phone);
}

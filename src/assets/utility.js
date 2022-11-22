export const validateEmail = (input) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    return regEx.test(input)
}

export const validateTextInput = (input, min, max) => {
    const regEx=/^[a-zA-Z][a-zA-Z\\s-]+[a-zA-Z]$/;
    if(input.length<min || input.length>max) return false
    return regEx.test(input); 
}

export const validatePhone = (input) => {
    const regEx=/^([+]\d{2})? \d{10}$/;
    return regEx.test(input);
}




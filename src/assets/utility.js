export const validateEmail = (input) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    return regEx.test(input)
}

export const validateTextInput = (input, min, max) => {
    
}




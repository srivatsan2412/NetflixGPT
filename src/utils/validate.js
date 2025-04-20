export const checkValidDataForSignIn = (email, password) => {
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

 const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

 if(!isEmailValid) {
    return "Email Id is not valid";
 }

if(!isPasswordValid) {
    return "Password is not valid, it must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
}
    return null;
}

export const checkValidDataForSignUp = (email, password, fullName) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    const isNameValid = /([a-zA-Z0-9_\s]+)/.test(fullName);
    
    if(!isNameValid) {
        return "Name is not valid";
    }
   
    if(!isEmailValid) {
       return "Email Id is not valid";
    }
   
   if(!isPasswordValid) {
       return "Password is not valid, it must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
   }
       return null;
}

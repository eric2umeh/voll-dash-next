export const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  export const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  
  export const validationErrors = (formData) => {
    const errors = {};
  
    if (formData.username.trim() === '') {
      errors.userNameError = 'Username is required';
    }
  
    if (formData.firstName.trim() === '') {
      errors.firstNameError = 'First Name is required';
    }
  
    if (formData.lastName.trim() === '') {
      errors.lastNameError = 'Last Name is required';
    }
  
    if (formData.email.trim() === '') {
      errors.emailError = 'Email is required';
    } else if (!isEmailValid(formData.email)) {
      errors.emailError = 'Invalid email format';
    }
  
    if (formData.password.trim() === '') {
      errors.passwordError = 'Password is required';
     } 
    // else if (!isPasswordValid(formData.password)) {
    //   errors.passwordError = 'Invalid password format';
    // }
  
    if (formData.phoneNumber.trim() === '') {
      errors.phoneError = 'Phone Number is required';
    }
  
    if (formData.howDidYouHear.trim() === '') {
      errors.howDidYouHearError = 'Field is required';
    }
  
    return errors;
  };
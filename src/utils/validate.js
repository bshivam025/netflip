// Validate Email: Checks for a basic pattern: something@something.domain
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let res = emailRegex.test(email);
    if (!res) return "Please enter a valid email address (e.g., user@example.com).";
    return null;
  };
  
  // Validate Password: At least 8 characters, at least one letter and one number
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const res = passwordRegex.test(password);
    if (!res) {
      return "Password must be at least 8 characters long and include at least one letter and one number.";
    }
    return null;
  };
  
  // Validate Name: Letters (including spaces), allowing 2 to 50 characters
  export const validateName = (name) => {
    const nameRegex = /^[A-Za-z ]{2,50}$/;
    let res = nameRegex.test(name);
    if (!res) {
      return "Name should contain only letters and spaces, and be between 2 and 50 characters long.";
    }
    return null;
  };
  
export const checkValidity = (email, password) => {
  const email_regex = /^\S+@\S+\.\S+$/;
  const password_regex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!email_regex.test(email))
    return {
      errorMsg: "Invalid Email",
    };
  else if (!password_regex.test(password))
    return {
      errorMsg: "password doesn't meet expectation",
    };

  return null;
};

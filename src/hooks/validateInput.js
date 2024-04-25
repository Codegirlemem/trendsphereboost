export function validateInput(input, signup, callback) {
  const invalidValues = {};
  let isValid = true;

  const passwordTest = /^[0-9A-Za-z]{6,}$/.test(input.userPassword?.trim());

  const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
    input.userEmail?.trim(),
  );
  if (input.userName) {
    if (input.userName.length > 0) {
      if (!input.userName?.trim()) {
        invalidValues.userName =
          'Name is required and cannot start with a space';
        isValid = false;
      } else if (input.userName?.trim().length < 6) {
        invalidValues.userName = 'Name must be atleast six characters long';
        isValid = false;
      }
    }
  }
  if (input.userEmail) {
    if (!input.userEmail?.trim()) {
      invalidValues.userEmail = 'Email is required';
      isValid = false;
    } else if (!emailTest) {
      invalidValues.userEmail = 'Email is not valid';
      isValid = false;
    }
  }
  if (input.userPassword) {
    if (!input.userPassword?.trim()) {
      invalidValues.userPassword =
        'Password is required and cannot start with a space';
      isValid = false;
    } else if (!passwordTest) {
      invalidValues.userPassword =
        'Password must be atleast six characters long with letters or numbers.';
      isValid = false;
    } else if (signup && input.userPassword) {
      if (input.confirmedPassword?.length === 0) {
        invalidValues.confirmedPassword = 'Confirm your password';
        isValid = false;
      } else if (input.userPassword !== input.confirmedPassword) {
        invalidValues.confirmedPassword = 'Password not matched';
        isValid = false;
      }
    }
  }
  if (signup) {
    if (!input.checkbox) {
      invalidValues.checkbox = 'Not checked';
      isValid = false;
    }
  }
  callback({ ...invalidValues });

  return [isValid];
}

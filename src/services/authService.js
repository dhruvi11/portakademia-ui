export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@portakademia.com' && password === 'password') {
        resolve({ email, token: 'fake-jwt-token' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};

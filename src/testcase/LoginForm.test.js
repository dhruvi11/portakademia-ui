import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import LoginForm from '../components/LoginForm';

test('renders login form and shows error on wrong credentials', async () => {
  render(
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: 'wrong@portakademia.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: 'wrongpass' },
  });
  fireEvent.click(screen.getByText(/login/i));

  const errorMessage = await screen.findByText(/invalid email or password/i);
  expect(errorMessage).toBeInTheDocument();
});

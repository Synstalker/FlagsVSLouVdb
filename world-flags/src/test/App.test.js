import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('World Flags App', () => {
  test('renders the search input', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search for a country/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders the filter dropdown', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const filterDropdown = screen.getByText(/Filter by Region/i);
    expect(filterDropdown).toBeInTheDocument();
  });

  test('renders the country list', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const countryList = await screen.findByTestId('country-list');
    expect(countryList).toBeInTheDocument();
  });

  test('search input updates on user input', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search for a country/i);
    fireEvent.change(searchInput, { target: { value: 'France' } });
    expect(searchInput.value).toBe('France');
  });

  test('filter dropdown displays options', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const filterDropdown = screen.getByText(/Filter by Region/i);
    fireEvent.click(filterDropdown);
    const regionOption = screen.getByText(/Europe/i); // Replace "Europe" with an actual region in your app
    expect(regionOption).toBeInTheDocument();
  });

  test('displays country details when a country is clicked', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const countryList = await screen.findByTestId('country-list');
    const countryItem = countryList.querySelector('button'); // Assuming countries are rendered as buttons
    fireEvent.click(countryItem);

    const countryDetails = await screen.findByTestId('country-details');
    expect(countryDetails).toBeInTheDocument();
    expect(countryDetails).toHaveTextContent(/France/i); // Replace "France" with a valid country name
  });
});
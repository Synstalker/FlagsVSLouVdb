import { render, screen } from '@testing-library/react';
import App from '../App';

describe('World Flags App', () => {
  test('renders the search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search for a country/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders the filter dropdown', () => {
    render(<App />);
    const filterDropdown = screen.getByText(/Filter by Region/i);
    expect(filterDropdown).toBeInTheDocument();
  });

  test('renders the country list', async () => {
    render(<App />);
    const countryList = await screen.findByTestId('country-list');
    expect(countryList).toBeInTheDocument();
  });
});
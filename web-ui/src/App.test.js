import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@heroui/react', () => {
  const createComponent = (Element) => {
    const Component = ({ children, ...props }) => <Element {...props}>{children}</Element>;
    return Component;
  };

  const Card = createComponent('article');
  Card.Header = createComponent('div');
  Card.Content = createComponent('div');
  Card.Footer = createComponent('div');

  return {
    Card,
    Chip: createComponent('span'),
    Link: createComponent('a'),
  };
});

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByText('Software Developer')).toBeInTheDocument();
  expect(screen.getByText(/skills & tools/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /things i am building and refining/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /my current resume/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /let us build something useful/i })).toBeInTheDocument();
});

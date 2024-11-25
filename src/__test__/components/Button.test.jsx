import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  test('should render the Button component', () => {
    render(<Button label='Button' />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});

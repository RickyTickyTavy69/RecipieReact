import { render } from '@testing-library/react';
import Title from './Title';
import '@testing-library/jest-dom'

test('renders Title component with correct CSS class and text', () => {
    const testText = 'Test Title';
    const { getByText } = render(<Title>{testText}</Title>);
    const titleElement = getByText(testText);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('text-black text-xl font-bold my-4 p-2');
});

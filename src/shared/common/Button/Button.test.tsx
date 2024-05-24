import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom'

describe('Button tests', () => {
    it('button has correct default styles when no props are provided', () => {
        render(<Button title="Click me" />);
        const buttonElement = screen.getByText(/Click me/i);
        expect(buttonElement).toHaveClass('border-black rounded border-4 hover:border-red-800 p-2 my-4 text-red-500');
    })
});

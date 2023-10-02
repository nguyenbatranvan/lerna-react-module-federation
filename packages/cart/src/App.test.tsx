import React from 'react';
import {render, screen, within} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {cleanup} from "@testing-library/react";

jest.mocked('./App')
afterEach(cleanup)
describe('App Cart Component', () => {
    test('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/this is cart app/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Should have initial value 0', () => {
        render(<App/>);
        expect(screen.getByText(/0/i)).toBeInTheDocument()
    })

    test('Shơ have change count', async () => {
        const user = userEvent.setup();
        render(<App/>)
        const increBtn = screen.getByRole('button', {
            name: /Change Count/i
        })
        const text = within(screen.getByTestId('hi'))
        await user.click(increBtn);
        expect(text.getByText('Count is: 1')).toBeInTheDocument()
        // expect(screen.getByText(/1/i)).toBeInTheDocument();
    })
})

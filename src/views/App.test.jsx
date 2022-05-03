import { screen, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'


describe('tests', () =>{
 test('Should test to ensure a character, character quote and search button are displayed (components)', async () => {
        render(<App />);

    await screen.findByRole('heading', {Name: /Futurama List/i})

    // expect(heading).toBeInTheDocument();
    const quote = await screen.findByRole('textbox', {Quote: /A grim day for robot-kind. But we can always build more killbots./i})
   
    expect(quote).toBeInTheDocument()

        }
 )
 
    it('Should test the character fry returns after a user searches for Candy', async () => {
        render(<MemoryRouter><App/></MemoryRouter>);

        await waitForElementToBeRemoved(screen.getByText('loading'))

        const search = await screen.findByPlaceholderText(/find-character/i);
       
        userEvent.type(search, 'Candy');
   
        const result = await screen.findByLabelText(/display-name/i)
    
         expect(result.textContent).toEqual('Name: Candy')
        })
        })

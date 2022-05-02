import { screen, render, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { act } from 'react-dom/test-utils'


describe('tests', () =>{
 test('Should test to ensure a character, character quote and search button are displayed (components)', async () => {
        render(<App />);

        return waitFor(() => {

    const name= screen.getByLabelText('display-name', {Name: /Bender/i})
    expect(name).toBeInTheDocument();
      
   const quote = screen.findByRole('textbox', {Quote: /A grim day for robot-kind. But we can always build more killbots./i})
   expect(quote).toBeInTheDocument()

        })}

        // const searchButton = await screen.getByText(/search/i, {selector: 'button'})

  

            // const text = await screen.findByText('Name: Candy')
           
          
            // expect(text.value).toEqual('Name: Candy');

       )
 })
  
    it('Should test the character fry returns after a user searches for fry', async () => {
        render(<App/>);

        const search = await screen.findByLabelText(/Search/i);
        const button = await screen.findByLabelText(/button/i);
        
        userEvent.type(search, 'Fry');
      
        userEvent.click(button);
  return waitFor(() => {
        const result = screen.getByLabelText(/Search/i)
    
            expect(result.value).toEqual('Fry')
        })
        
        })

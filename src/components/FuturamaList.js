
import { useEffect, useState } from 'react';


export default function FuturamaList(){
 const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);



useEffect(() => {
async function getCharacters() {
const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
console.log(await res.json());

const characters = result.results;
const resultCount = result.length;

setCharacters(characters)
console.log(characters, resultCount)

}
getCharacters();
setLoading(false);

},[])
// if (loading){

return(
    <>
    <h3>Characters of FuturamaList</h3>
        {
        characters.map((character, i) => {
            return (<div>
              <h2>{characters.Name}Name</h2> 
              
               </div>
            )
        })}
    
    
    </>
)

}

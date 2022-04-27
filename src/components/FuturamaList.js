import React from 'react';
import { useEffect, useState } from 'react';


export default function FuturamaList(){
 const [characters, setCharacters] = useState([]);
 const [loading, setLoading] = useState(true);


useEffect(() => {
async function getCharacters() {
const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
const result = await res.json();
console.log(result, 'result')
// const charactersData = result[0];
// console.log(charactersData, 'character data')

const characters = result.map((character) => ({
    name:character.Name
}));

setCharacters(characters)
console.log(characters)

}
getCharacters();

},[])
if (loading){

return(
    <>
    <h3>Characters of FuturamaList</h3>
        {
        characters.map((character, i) => {
            return (
                <>
            <div>
              <h2>Name: {character.name}</h2> 

               </div>
               </>
            )
        })}

    </>
)

}}

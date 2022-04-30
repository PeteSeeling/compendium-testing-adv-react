import React from 'react';
import { useEffect, useState } from 'react';


export default function FuturamaList(){
 const [characters, setCharacters] = useState([]);
 const [searchedCharacters, setSearchedCharacters] = useState([]);
 const [loading, setLoading] = useState(true);
 const [search, setSearch] = useState('');

 function handleSubmit(e){
     e.preventDefault()

     if(search){
        const filteredCharacters = characters.filter((character) => quote.character
        .toLowerCase(search)
        .includes(search));
        setSearchedCharacters(filteredCharacters )

        return filteredCharacters ;
     }
     setSearch('')
 }


useEffect(() => {
async function getCharacters() {

const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
const result = await res.json();

const characters = result.map((character) => ({
    name: character.Name,
    age: character.Age,

}));

setCharacters(characters)
}
getCharacters();

},[])
if (loading){

return(
    <>
<form onSubmit={handleSubmit}>
<label>Name
    <input type='text' aria-label='Search' value={search} onChange={e => setSearch(e.target.value)}></input>
        <button aria-label='button'>Search</button>
    </label>
</form>

{search
? searchedCharacters.map((character, i) => {
    return(  
              <div>
              <h2 aria-label='character'>Name: {character.name}</h2> 
              <h3>Age: {character.age}</h3>
               </div>
            )  
        })
        : characters.map((character, i) => {
            return(  
                        <div>
                      <h2 aria-label='display-name'>Name: {character.name}</h2> 
                      <h3>Age: {character.age}</h3>
                       </div>
                    )  
            })
        }
        </>
)
    }
}

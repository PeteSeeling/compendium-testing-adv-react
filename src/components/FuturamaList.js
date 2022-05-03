import React from 'react';
import { useEffect, useState } from 'react';


export default function FuturamaList(){
 const [characters, setCharacters] = useState([]);
 const [searchedCharacters, setSearchedCharacters] = useState([]);
 const [loading, setLoading] = useState(true);
 const [search, setSearch] = useState('');

 const displayCharacters = search ? searchedCharacters : characters

 
 useEffect(() => {
    const filteredCharacters = characters.filter((character) => character.name
        .toLowerCase()
        .includes(search.toLowerCase()));
        setSearchedCharacters(filteredCharacters)
 },[search])


useEffect(() => {
async function getCharacters() {

const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
const result = await res.json();

const characters = result.map((character) => ({
    name: character.Name,
    age: character.Age,

}));

setCharacters(characters)
setLoading(false);
}
getCharacters();


},[])
// if (loading)


return(
    <>

    <input type='text' placeholder='find-character' aria-label='Search' value={search} onChange={e => setSearch(e.target.value)}></input>
       
{
    (loading) ? (<div aria-label='loading'>loading</div>) :
displayCharacters.map((character, i) => {
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


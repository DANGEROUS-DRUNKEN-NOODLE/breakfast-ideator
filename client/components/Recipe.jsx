import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { 
    Favorite,
    FavoriteBorder
 } from '@mui/icons-material';
 import Checkbox from '@mui/material/Checkbox'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '1em'
}));

const Recipe = (props) => {

    // Set a variable to store the state of the favorites checkbox
    const [checked, setChecked] = useState(props.fav);

    console.log(props.fav);
    // Handle making/removing a recipe as a favorite
    const handleClick = (recipeID) => {
        // Make call to server to add recipe id in user favorites
        if(!checked) {
            fetch('/api/favorites',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({favorite: recipeID})
            })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err));
        } else { // Make call to server to remove recipe id in user favorites
            fetch('/api/favorites',{
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({favorite: recipeID})
            })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }

    return (
        <Item>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <h3>{props.title}</h3>
                <Checkbox 
                    // When favorite checkbox is clicked update recipe in user favorites and toggle if the box is checked
                    onChange={() => {
                        handleClick(props.id);
                        setChecked(!checked);
                    }}
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />}
                    checked={checked}
                />
                <Link
                to={{
                    pathname: '/recipe',
                    search: `?id=${props.id}`
                }}>
                <input type="image" src={props.image} alt={props.title}></input>
                </Link>
            </div>
        </Item>
    )
}

export default Recipe;
import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528',
// 		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
// 	}
// };

// fetch('https://mdblist.p.rapidapi.com/?s=jaws', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//https://rapidapi.com/linaspurinis/api/mdblist/
const Movie = () => {
    const location = useLocation();

    useEffect(() => {
        const { id } = location.state;

        console.log(location);
    });

    return <div></div>;
};

export default Movie;

import React from 'react';



function CardList() {
    const cardWatch = ["The Blacklist - Netflix", 'Obi Wan Kenobi - Disney+', 'Stranger Things Season 4 - Netflix'];
    const cardLearn = ['Podcasts on Spotify', 'The Lincoln Highway - Libby App', 'The Old Testament & Book of Mormon', 'Front End Development', 'HTML, CSS, React, & React Native'];
    const cardExercise = ['Riding on stationary Peloton Bike', 'Occasional Hike'];
    const cardGuilty = ['Apex Legends', 'Super Auto Pets Mobile Game', 'Zelda BOTW'];

    const createList = cardWatch.map((list) => 
        <li>{list}</li>
    )
    return (
        <ul>
            {createList}
            console.log(createList)
        </ul>
    )
}

export {CardList}
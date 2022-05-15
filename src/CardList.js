import React from 'react';
import Card from './Card';

const CardList = ({ giraffes }) => {
    return (
        <div>
             {
                 giraffes.map((user, i) => {
                    return (<Card key={i} id={giraffes[i].id} gname={giraffes[i].gname} email={giraffes[i].email} />);
                })
             }
        </div>
    );
}

export default CardList;
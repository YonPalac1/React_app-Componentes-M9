import React from 'react';
import CardsRowMovies from './CardsRowMovies';

let data = [
    {
        title : "Movies in Data Base",
        borderColor : "border-left-primary",
        quantity : 21,
        icon : "fa-film"
    },
    {
        title : "Total awards",
        borderColor : "border-left-danger",
        quantity : 79,
        icon : "fa-award"
    },
    {
        title : "Actors quantity",
        borderColor : "border-left-warning",
        quantity : 40,
        icon : "fa-user"
    },
]
 function ContentRowMovies() {
    return (
            <div className="row">
                {
                    data.map((card)=>{
                      return <CardsRowMovies title={card.title} borderColor={card.borderColor} quantity={card.quantity} icon={card.icon} />
                    })
                }
       
            </div>
    )
}
export default ContentRowMovies
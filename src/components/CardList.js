import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <section className="list">
            {props.header && !props.loading ? <h1 className='search-title'>{props.header}</h1> : null}
            <div className="item-list">
                {props.mode === 'movie' ?
                    (props.itemsList.map((item, i) => {
                        return (
                            <Card
                                key={i}
                                id={props.itemsList[i].id}
                                title={props.itemsList[i].title}
                                imageUrl={props.itemsList[i].poster_path}
                                rate={props.itemsList[i].vote_average}
                                ratePercent={props.itemsList[i].vote_average * 10}
                                year={props.itemsList[i].release_date.substring(0, 4)}
                            />
                        );
                    })) :
                    (props.itemsList.map((item, i) => {
                        return (
                            <Card
                                key={i}
                                id={props.itemsList[i].id}
                                title={props.itemsList[i].name}
                                imageUrl={props.itemsList[i].poster_path}
                                rate={props.itemsList[i].vote_average}
                                ratePercent={props.itemsList[i].vote_average * 10}
                                year={props.itemsList[i].first_air_date.substring(0, 4)}
                            />
                        );
                    }))
                }
            </div>
        </section>
    );
}

export default CardList;
import React from 'react';
import CardItems from '../../elements/cardItems/CardItems';
import './cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Chech out this epic Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems 
                            src = 'images/img-9.jpg'
                            text= 'Explore the hidden waterfall deep inside Amazon jungle'
                            label ="Adventure"
                            path = '/services'
                        />
                        <CardItems 
                            src = 'images/img-2.jpg'
                            text= 'Travel through the Island of Bali in a Private Cruise'
                            label ="Luxury"
                            path = '/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems 
                            src = 'images/img-3.jpg'
                            text= 'Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label ="Mystry"
                            path = '/services'
                        />
                        <CardItems 
                            src = 'images/img-4.jpg'
                            text= 'Experience football on Top of the Himalayan Mountains'
                            label ="Sport"
                            path = '/services'
                        />
                        <CardItems 
                            src = 'images/img-8.jpg'
                            text= 'Raid through the Sahara Desert on a guided camel tour'
                            label ="Adventure"
                            path = '/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

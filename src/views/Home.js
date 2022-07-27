import React from 'react';
import List from '../components/List';

const Home = () => {
    return (
        <div className='home-container'>
            <p className='list-title'>Lista de Invitados</p>
            <div className='body-container'>
                <div className='body-list'>
                    <p className='good'>Asistentes</p>
                    <List route={'guests'} confirmation={true}/>
                </div>
                <div className='body-list'>
                    <p className='bad'>No Asistentes</p>
                    <List route={'guests'} confirmation={false}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
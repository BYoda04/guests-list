import React from 'react';

const Escorts = ({escort}) => {
    return (
        <div className='escorts-container'>
            <p>{ escort?.name }</p>
            <p className={ escort?.confirmation ? 'good' : 'bad' }>{ escort?.confirmation ? 'Asistira' : 'No asistira' }</p>
        </div>
    );
};

export default Escorts;
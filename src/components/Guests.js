import React from 'react';
import Escorts from './Escorts';

const Guests = ({guest}) => {
    return (
        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id={ guest?.id }>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle={`collapse`} data-bs-target={`#collapse${guest?.id}`} aria-expanded="false" aria-controls={`collapse${guest?.id}`}>
                        <div className='title'>
                            <p>{ guest?.completName }</p>
                            <p className={ guest?.confirmation ? 'good' : 'bad' }>{ guest?.confirmation ? 'Asistira' : 'No asistira' }</p>
                            <p>Acompañantes: { guest?.escorts?.length }</p>
                        </div>
                    </button>
                </h2>
                <div id={`collapse${guest?.id}`} className={`accordion-collapse collapse`} aria-labelledby={ guest?.id } data-bs-parent="#accordion">
                    <div className="accordion-body">
                        { guest?.escorts?.map(escort=>(
                            <Escorts escort={escort} key={escort?.id}/>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guests;
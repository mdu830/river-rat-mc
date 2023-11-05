import React from 'react';

const SubFooter = React.memo(() => {
    return(
        <footer className="subFooter">
            
            <h3 className='link' onClick={() => window.location = 'tel:+19199209213'}>
                (919)920-9213
                </h3>
        </footer>
    );
});

export default SubFooter;
import React from 'react';

const SubFooter = React.memo(() => {
    return (
        <footer className="subFooter">

            <h5 className='subText'>
                Call Us Today To Request A Free Quote!   
            </h5>
            <h3 className='link' onClick={() => window.location = 'tel:+19199209213'}>
                (919)920-9213
            </h3>
        </footer>
    );
});

export default SubFooter;
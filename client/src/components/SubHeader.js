import React from 'react';

const SubHeader = React.memo(() => {
    return (
        <footer className="subHeader">

            <h3 className='subText'>
                Call Us Today To Request A Free Quote!   
            </h3>
            <h3 className='subText subLink' onClick={() => window.location = 'tel:+19199209213'}>
                (919)920-9213
            </h3>
        </footer>
    );
});

export default SubHeader;
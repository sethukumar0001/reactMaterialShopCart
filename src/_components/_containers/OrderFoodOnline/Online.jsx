import React from 'react';
import OnlineHtml from './OnlineHtml';

function Online(props) {

    const ItemPage = (hotelName) => {
        sessionStorage.setItem("hotelName", hotelName)
        props.history.push('/itemList')
    }

    return (
        <div>
            <OnlineHtml ItemPage={ItemPage} />
        </div>
    );
}

export default Online;
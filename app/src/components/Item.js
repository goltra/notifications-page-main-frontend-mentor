import { useEffect, useState } from 'react';
import '../global.css';
import './Item.css';
import PrivateMessage from './PrivateMessage';


const Item = ({ item, unread,toggleRead }) => {
    const pointUnread = () => {
        if (unread) {
            return <img onClick={()=>toggleRead(item)} className='unreadPoint' src={require('../images/punto.png')}></img>
        }
    }
    const privateMessage = () => {
        if (item.isPrivate) {
            return <PrivateMessage text={item.privateMessage}></PrivateMessage>;
        }
    }

    useEffect(() => {
        console.log('useEffect Item', item.unread);
    })




    return (
        <section>
            <div key={item.key} className={`item ${item.unread ? 'item-unread' : 'item-read'}`}>
                <img className='avatar' src={require('../images/' + item.image)}></img>
                <div>
                    <div className='message-container'>
                        <p className='message'>
                            <span className="activate">{item.user}</span>
                            <span className='action'>{" " + item.action + " "} </span>
                            <span className="activate">{item.actionTo}</span></p>
                        <span className="activate">{pointUnread()}</span>
                    </div>
                    <p className='time'>{item.time}</p>
                </div>
            </div>
            <div>
                {privateMessage()}
            </div>
        </section>
    )
}

export default Item;

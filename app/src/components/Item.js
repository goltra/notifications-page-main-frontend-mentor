import { useEffect, useState } from 'react';
import '../global.css';
import './Item.css';
import PrivateMessage from './PrivateMessage';


const Item = ({ item,unread }) => {
    const pointUnread = () => {
        if (i.unread) {
            return <img onClick={setRead} className='unreadPoint' src={require('../images/punto.png')}></img>
        }
    }
    const privateMessage = () => {
        if (i.isPrivate) {
            return <PrivateMessage text={i.privateMessage}></PrivateMessage>;
        }
    }

    useEffect(() => {
        console.log('useEffect Item', i.unread);
    })
    const [i, setItem] = useState(item);

    const setRead = () => { 
        setItem({...i, unread : false});
     };

    return (
        <section>
            <div key={i.key} className={`item ${i.unread ? 'item-unread' : 'item-read'}`}>
                <img className='avatar' src={require('../images/' + i.image)}></img>
                <div>
                    <div className='message-container'>
                        -- {JSON.stringify(unread)}
                        <p className='message'>
                            <span className="activate">{i.user}</span>
                            <span className='action'>{" " + i.action + " "} </span>
                            <span className="activate">{i.actionTo}</span></p>
                        <span className="activate">{pointUnread()}</span>
                    </div>
                    <p className='time'>{i.time}</p>
                </div>
            </div>
            <div>
                {privateMessage()}
            </div>
        </section>
    )
}

export default Item;

import '../global.css';
import './NotificationsList.css'
import Notifications from './Notifications';
import Item from './Item';
import data from '../data/messages.json';
import { useEffect, useState } from 'react';


const NotificationsList = () => {

    const [messages, setMessages] = useState(data);
    const [unreads, setUnreads] = useState(0);



    const markAllRead = () => {
        const msgs = [...messages];
        msgs.map(m => m.unread = false);
        setMessages(msgs);
        countUnread();
    }

    const countUnread = () => {
        const withUnread = messages.filter(m => m.unread === true);
        console.log('withUnread', withUnread);
        setUnreads(withUnread.length);
    }

    useEffect(() => {
        countUnread();
        console.log('useEffect NotificationList', messages)
    }, []);

    const toggleRead = (item) => {
        console.log('toggleRead item', item)
        const newData = [...messages];
        const index = messages.findIndex(i => i.id === item.id)
        newData[index].unread= !item.unread;
        setMessages(newData);
        countUnread();
    };

    return (
        <div className='container'>
            <div className='content'>
                <div className="notification-display">
                    <Notifications unreadItems={unreads} />
                    <span className="activate mark-all " onClick={markAllRead}>Mark all as read</span>
                </div>
                <div>
                    {
                        messages.map((d) => <Item key={d.id} item={d} unread={d.unread} toggleRead={toggleRead} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default NotificationsList;

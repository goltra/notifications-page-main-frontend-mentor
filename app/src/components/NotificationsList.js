import '../global.css';
import './NotificationsList.css'
import Notifications from './Notifications';
import Item from './Item';
import data from '../data/messages.json';
import { useEffect, useState } from 'react';


const NotificationsList = () => {
    
    const [messages, setMessages] = useState(data);
    const [unreads, setUnreads]= useState();



    const markAllRead = () => {
        setMessages((msgs)=>{
            msgs.map(m=>m.unread=false);
            return msgs;
        })
        countUnread();
        console.log('mark', messages);
    }
    
    const countUnread=()=>{
        const withUnread = messages.filter(m=>m.unread===true);
        console.log('withUnread',withUnread);
        setUnreads(withUnread.length);
    }

    useEffect(()=>{
        countUnread();
        console.log('useEffect NotificationList', messages)
    },[]);
    

    return (
        <div className='container'>
            <div className='content'>
                <div className="notification-display">
                    <Notifications unreadItems={unreads} />
                    <span className="activate mark-all " onClick={markAllRead}>Mark all as read</span>
                </div>
                <div>
                    {
                        messages.map((d) => <Item key={d.id} item={d} unread={d.unread}></Item>)
                    }
                </div>
            </div>
        </div>
    );
}

export default NotificationsList;

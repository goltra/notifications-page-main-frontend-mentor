import '../global.css';
import './NotificationsList.css'
import Notifications from './Notifications';
import Item from './Item';
import data from '../data/messages.json';


const NotificationsList = () => {
    const toogle = (item)=>{
        console.log('item',item);
        /*item.unread = !item.unread;*/
    };
console.log(data);
    return (
        <div className='container'>
            <div class='content'>
                <div className="notification-display">
                    <Notifications unreadItems="3"/>
                    <span className="activate mark-all ">Mark all as read</span>
                </div>
                <div>
                    {
                        data.map((d)=> <Item key={d.id} item={d} toogle-read={(e)=>toogle(e)}></Item> )
                    }
                </div>
            </div>
        </div>
    );
}

export default NotificationsList;

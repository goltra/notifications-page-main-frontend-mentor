import '../global.css';
import './NotificationsList.css'
import Notifications from './Notifications';
import Item from './Item';


const NotificationsList=()=>{
    return(
        <div className='container'>
            <div class='content'> 
                <Notifications unreadItems="3"/>
                <div>
                    <Item unread={true}></Item>
                    <Item unread={true}></Item>
                    <Item unread={false}></Item>
                    <Item unread={true}></Item>
                    <Item unread={false}></Item>
                </div>
            </div>
        </div>
    );
}

export default NotificationsList;
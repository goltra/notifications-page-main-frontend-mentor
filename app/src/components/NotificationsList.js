import '../global.css';
import './NotificationsList.css'
import Notifications from './Notifications';
import Item from './Item';


const NotificationsList = () => {
    return (
        <div className='container'>
            <div class='content'>
                <div className="notification-display">
                    <Notifications unreadItems="3" />
                    <span className="activate mark-all ">Mark all as read</span>
                </div>
                <div>
                    <Item item={{
                        unread: true,
                        image: 'avatar-angela-gray.webp',
                        user: 'Mark Webber',
                        action: 'reacted to your recent post',
                        actionTo: 'My post peter pan can fly',
                        isPrivate: true,
                        privateMessage: 'Hello this message is only for your eyes.. '
                    }}></Item>
                    <Item item={{ unread: true, image: 'avatar-angela-gray.webp', message: '' }}></Item>
                    <Item item={{ unread: false, image: 'avatar-angela-gray.webp', message: '' }}></Item>
                    <Item item={{ unread: true, image: 'avatar-angela-gray.webp', message: '' }}></Item>
                    <Item item={{ unread: false, image: 'avatar-angela-gray.webp', message: '' }}></Item>
                </div>
            </div>
        </div>
    );
}

export default NotificationsList;
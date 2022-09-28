import '../global.css';
import './NotificationsList.css'
import Notifications from './Notifications';
import Item from './Item';


const NotificationsList = () => {
    return (
        <div className='container'>
            <div class='content'>
                <Notifications unreadItems="3" />
                <div>
                    <Item item={{
                        unread: true,
                        image: 'avatar-angela-gray.webp',
                        message: '<strong>Mark Webber</strong> <span className="action">reacted to your recent post</span> <strong>My</strong>'
                        }}></Item>
                    <Item item={{ unread: true, image: 'avatar-angela-gray.webp',message: '' }}></Item>
                    <Item item={{ unread: false, image: 'avatar-angela-gray.webp',message: '' }}></Item>
                    <Item item={{ unread: true, image: 'avatar-angela-gray.webp',message: '' }}></Item>
                    <Item item={{ unread: false, image: 'avatar-angela-gray.webp',message: '' }}></Item>
                </div>
            </div>
        </div>
    );
}

export default NotificationsList;
import "../global.css";
import './Notifications.css';

const Notifications = ({unreadItems})=>{
    return(
        <p className='text'>Notificaciones <span className="numberUnread">{unreadItems}</span></p>
    );

}

export default Notifications;
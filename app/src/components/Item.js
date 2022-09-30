import '../global.css';
import './Item.css';
import PrivateMessage from './PrivateMessage';


const Item = ({ item, toogle }) => {
    const pointUnread = () => {
        if (item.unread) {
            return <img className='unreadPoint' src={require('../images/punto.png')}></img>
        }
    }
    const privateMessage = () => {
        if (item.isPrivate) {
            return <PrivateMessage text={item.privateMessage}></PrivateMessage>;
        }
    }
    return (
        <section>
            <div className={`item ${item.unread ? 'item-unread' : 'item-read'}`}>
                <img className='avatar' src={require('../images/' + item.image)}></img>
                <div>
                    <div className='message-container'>
                        <p className='message'>
                            <span className="activate">{item.user}</span>
                            <span className='action'>{" " + item.action + " "} </span>
                            <span className="activate">{item.actionTo}</span></p>
                        <span onClick={()=>toogle(item)} className="activate">{pointUnread()}</span>
                    </div>
                    <p className='time'>5m ago</p>
                </div>
            </div>
            <div>
                {privateMessage()}
            </div>
        </section>
    )
}

export default Item;

import '../global.css';
import './Item.css';


const Item = ({ item }) => {
    const pointUnread = () => {
        if (item.unread) {
            return <img className='unreadPoint' src={require('../images/punto.png')}></img>
        }
    }
    return (
        <div className={`item ${item.unread ? 'item-unread' : 'item-read'}`}>
            <img className='avatar' src={require('../images/' + item.image)}></img>
            <div>
                <div className='message-container'>
                    <p className='message' dangerouslySetInnerHTML={{ __html: item.message }}></p>
                    {pointUnread()}
                </div>
                <p className='time'>5m ago</p>
            </div>
        </div>
    )
}

export default Item;
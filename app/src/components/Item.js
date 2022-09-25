import '../global.css';
import './Item.css';


const Item = ({ unread }) => {
    console.log(unread)
    return (

        <div className={`item ${unread ? 'item-unread' : 'item-read'}`}>
           <img  src={require('../images/avatar-angela-gray.webp')}></img>
            Item
        </div>
    )
}

export default Item;
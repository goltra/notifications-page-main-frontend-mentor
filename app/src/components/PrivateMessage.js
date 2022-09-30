import '../global.css';
import './PrivateMessage.css';

const PrivateMessage = ({text}) => {
    return (
        <p className='private-message'> {text} </p>
    )
}

export default PrivateMessage;

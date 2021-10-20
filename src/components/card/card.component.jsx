import react from 'react';
import './card.styles.css';

const Card=()=>(
    <div className="card-title">
        <div className="card-body">
            <form>
                <span>Username:</span>
                <input type= "text" className='card-username'/>
                <span>Password:</span>                
                <input type = 'text' className='card-password'/>
            </form>
        </div>
    </div>
)
export default Card;
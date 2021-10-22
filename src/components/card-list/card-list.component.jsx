import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList=(props)=>{
    
    return(<div className = 'card-list'>
                {props.userList.map(({id,...otherUserProps}) =>(
                    <Card  key ={id} {...otherUserProps}/>
                    ))
                }   
            </div>);
}
export default CardList;
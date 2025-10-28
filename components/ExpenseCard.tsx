import { ExpenseCardType } from '@/types/index';
import Link from "next/link";

const ExpenseCard = ({ post } : {post:ExpenseCardType} ) => {
    const {_createdAT,title,description,date,amount,category} = post;
    
    return(
        <li className="card_grid-text">
            <div className="flex-between">
                <div className="card_grid-text">
                    <p>{post._createdAT}</p> 
                    <h2 className='card_grid-head'>{ post.title }</h2>
                </div>
                <div className="card_grid-details">
                    <span className="label"> Category:</span> 
                    <span  className="card_grid-input">{ post.category }</span>
                </div>
                <div className="caard_grid-details">
                    <span className="label"> Amount:</span> 
                    <span  className="card_grid-input">{ post.amount }</span>
                </div>
                <div className="caard_grid-details">
                    <span className="label"> Occured At:</span> 
                    <span  className="card_grid-input">{ post.date }</span>
                </div>
            </div>
        </li>
 )
}
export default ExpenseCard;
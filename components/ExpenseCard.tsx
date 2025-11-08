import { ExpenseCardType } from '@/types/index';

const ExpenseCard = ({ post } : {post:ExpenseCardType} ) => {
  
    return(
        <li className="card_grid-text">
            <div className="flex-between">
                <div className="card_grid-text">
                    <p>{post._createdAT}</p> 
                    <h2 className='card_grid-head'>{ post.title }</h2>
                </div>
                <div className="card_grid-details">
                    <span className="label"> Category:</span> 
                    <span  className="card_grid-input"><a href={`/dashboard?query=${post.category}`} className="card_grid-input">{ post.category }</a></span>
                </div>
                <div className="card_grid-details">
                    <span className="label"> Amount:</span> 
                    <span  className="card_grid-input"><a href={`/dashboard?query=${post.amount}`} className="card_grid-input">{ post.amount }</a></span>
                </div>
                <div className="card_grid-details">
                    <span className="label"> Occured At:</span> 
                    <span  className="card_grid-input"><a href={`/dashboard?query=${post.date}`} className="card_grid-input">{ post.date }</a></span>
                </div>
            </div>
        </li>
 )
}
export default ExpenseCard;
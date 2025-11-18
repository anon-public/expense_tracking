import { ExpenseCardType } from '@/types/index';
import { Utensils, Trash2, Edit2, Ambulance, Bus, UserRoundCog, ReceiptText, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from 'react';

const categorycolor = {
    Food: {
        icon: Utensils,
        tagcolor: 'food-badge',
        borderColor: 'border-food',
        iconColor: 'icon-food'
    },
    Transport: {
        icon: Bus,
        tagcolor: 'transport-badge',
        borderColor: 'border-transport',
        iconColor: 'icon-transport'
    },
    Healthcare: {
        icon: Ambulance,
        tagcolor: 'healthcare-badge',
        borderColor: 'border-healthcare',
        iconColor: 'icon-healthcare'
    },
    Utilities: {
        icon: ReceiptText,
        tagcolor: 'utilities-badge',
        borderColor: 'border-utilities',
        iconColor: 'icon-utilities'
    },
    Other: {
        icon: UserRoundCog,
        tagcolor: 'other-badge',
        borderColor: 'border-other',
        iconColor: 'icon-other'
    },
}

interface ExpenseCardProps {
    post: ExpenseCardType;
    onDelete?: (id: number) => void;
    onEdit?: (expense : ExpenseCardType) => void;
}

const ExpenseCard = ({ post, onDelete, onEdit }: ExpenseCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const handleedit = () =>{
        if(onEdit){
            onEdit(post);
        }
    }

    const handleDelete = () => {
        if (onDelete) {
            onDelete(post._id);
        }
    };

    const config = categorycolor[post.category as keyof typeof categorycolor] || categorycolor.Other;
    const Icon = config.icon;

    return (
        <li className="expense-card-item">
            <div className={`expense-card ${config.borderColor}`}>

                <div className="card-top-section">
                    <div className="card-left">
                        <div className={`category-icon ${config.iconColor}`}>
                            <Icon size={24} />
                        </div>
                        <span className={`category-badge ${config.tagcolor}`}>
                            {post.category}
                        </span>
                    </div>

                    <div className="card-actions">
                        <button className="action-btn edit-btn" title="Edit" onClick={handleedit}>
                            <Edit2 size={18} />
                        </button>
                        <button 
                            className="action-btn delete-btn"
                            onClick={handleDelete}
                            title="Delete"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

                <div className="card-amount-section">
                    <h2 className="card-amount">
                        ${post.amount.toFixed(2)}
                    </h2>
                </div>

                <div className="card-date-section">
                    <span className="card-date">{post.date}</span>
                    <span className="card-time">{post._createdAT}</span>
                </div>

                <button 
                    className="expand-button"
                    onClick={toggleExpand}
                >
                    <span>More Details</span>
                    {isExpanded ? (
                        <ChevronUp size={20} />
                    ) : (
                        <ChevronDown size={20} />
                    )}
                </button>

                <div className={`expanded-section ${isExpanded ? 'show' : ''}`}>
                    <div className="expanded-content">
                        <div className="detail-item">
                            <p className="detail-label">Details</p>
                            <p className="detail-text">{post.description}</p>
                        </div>
                        <div className="detail-item">
                            <p className="detail-label">Transaction ID</p>
                            <p className="detail-text">#{post._id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ExpenseCard;
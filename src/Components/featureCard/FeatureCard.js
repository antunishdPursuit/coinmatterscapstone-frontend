
import './FeatureCard.css';

const FeatureCard = ({
    imgUrl,
    title, 
    text, 
    buttonText
}) => { 

    return (
        <div className="feature-card">
            <div className="feature-card__img">
                <img src={imgUrl} />
            </div>
            <div className="feature-card__info">
                <div className="feature-card__title">
                    {title}
                </div>
                <p>
                    {text}
                </p>
                <button>
                    {buttonText}
                </button>
            </div>
      </div>
    )

}

export default FeatureCard;
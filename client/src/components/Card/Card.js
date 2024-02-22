import { css } from "@emotion/css"

import "./Card.css"

const Card = ({cardPercent, cardIcon, cardIconColor, cardTitle, cardValue}) => {
    return (
        <div className="card">
            <span className={"card__icon go-center " + css({"--icon-color": cardIconColor})}>
                {cardIcon}
            </span>
            <div className="card__content align-items">
                <div className="text align-items">
                    <span className="card__title">{cardTitle}</span>
                    <h2 className="card__value">{cardValue}</h2>
                </div>
                <div className="card__percent">
                    <svg width={100} height={100} className={css({
                        "--percent": cardPercent
                    })}>
                        <circle r={37} cx={50} cy={50} />
                    </svg>
                    <span>{cardPercent}%</span>
                </div>
            </div>
            <p className="card__date">Last 24 Hours</p>
        </div>
  )
}

export default Card

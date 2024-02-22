import "./ContentTop.css"

const ContentTop = ({pageName}) => {
    return (
        <div className="content__top align-items">
            <h2 className="content__page_name">{ pageName }</h2>
            <div className="content_your_account align-items">
                <div className="text">
                    <p>Hey. <span className="yourname">Aryan</span></p>
                    <p>Admin</p>
                </div>
                <img src="img/profile.webp" alt="profile"/>
            </div>
        </div>
    )
}

export default ContentTop
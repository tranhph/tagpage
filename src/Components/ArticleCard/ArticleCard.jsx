import "./ArticleCard.css"

export default function ArticleCard() {
    return (
        <div className="ArticleCardDetail">
            <img className="ArticleImg" src="/articleImg1.png" alt="Hoiana" width="272" height="184" />
            <div className="ArticleContent">
                <a className="ArticleTitle" href="/" title="Khám phá thế giới nghỉ dưỡng cao cấp tại khu phức hợp Hoiana">Khám phá thế giới nghỉ dưỡng cao cấp tại khu phức hợp Hoiana</a>
                <p className="ArticleText">“Trứng, sữa đặc, bột cà phê, chút bơ, chút pho mát…nhưng tôi không thể nói tất cả được, bởi đây là công thức bí truyền của ...</p>
                <div className="ArticleDetailContainer">
                    <div className="ArticleDetail">
                        <a href="/" title="Tai Vo">
                            <img class="authorImg" src="/author1.png" alt="Tai Vo" width="32" height="32" />
                        </a>
                        <a className="authorName" href="/" title="Tai Vo">Tai Vo</a>
                        <p>·</p>
                        <p class="articleTime">4 Thg 5</p>
                        <p>·</p>
                        <a className="articleCategories" href="/" title="Ở">Ở</a>

                    </div>
                    <button className="saveBtn"> <img src="/saveBtn.png" alt="save" width="16" height="16" /></button>
                </div>
            </div>
        </div>
    );
}
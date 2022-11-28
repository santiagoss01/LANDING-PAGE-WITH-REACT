import React from "react";

const Cards = () => {

    return (<div className="card-group">
        <div className="card">
            <img className="card-img-top" src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4EBCQP7JENB5RJ4L7DLMYUGL6E.jpeg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">"Happy toghether"</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Directed by <b>Won-kar-wai</b></small></p>
                <a class="btn btn-secondary" onClick={window.open} href="https://www.youtube.com/watch?v=5VPvFaAWX9U&t=2s" role="button">Trailer</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://pbs.twimg.com/media/EbjBJdPXQAEKxkz.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">"Dasies"</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small class="text-muted">Directed by <b>Věra Chytilová.</b></small></p>
                <a class="btn btn-secondary" onClick={window.open} href="https://www.youtube.com/watch?v=9vBGo95SJz4" role="button">Trailer</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://static.filmin.es/images/media/15539/1/still_0_3_1360x765.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">"Cementery of splendour"</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small class="text-muted">Directed by <b>Apichad-pong-Weersetakhul.</b></small></p>
                <a class="btn btn-secondary" onClick={window.open} href="https://www.youtube.com/watch?v=8ohB_Y3z_Gk" role="button">Trailer</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://images.mubicdn.net/images/film/151/cache-47673-1578596421/image-w1280.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">"400 coups"</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Directed by <b>Francoise Truffaut.</b></small></p>
                <a class="btn btn-secondary" onClick={window.open} href="https://www.youtube.com/watch?v=i89oN8v7RdY" role="button">Trailer</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://www.lasfuriasmagazine.com/wp-content/uploads/2021/05/El-cine-de-Wong-Kar-Wai-a-trav%C3%A9s-de-tres-pel%C3%ADculas.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">"Fallen Angels"</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small class="text-muted">Directed by <b>Won-Kar-Wai.</b></small></p>
                <a class="btn btn-secondary" onClick={window.open} href="https://www.youtube.com/watch?v=uxaT19BlH0M" role="button">Trailer</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-10/VinzLaHaineVersDef.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">"La Haine"</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small class="text-muted">Directed by <b>Mathieu Kassovitz.</b></small></p>
                <a class="btn btn-secondary" onClick={window.open} href="https://www.youtube.com/watch?v=FKwcXt3JIaU" role="button">Trailer</a>
            </div>
        </div>
    </div>)
};

export default Cards;
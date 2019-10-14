import ImageToggleOnScroll from "./ImageToggleOnScroll";

const WhiskeyDetail = React.memo(
  ({ id, name, proof, favorite, detail, onFavoriteHandler }) => {
    return (
      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
          className="card-img-top"
          primaryImg={`/static/whiskeys/${id}-bw.jpg`}
          secondaryImg={`/static/whiskeys/${id}.jpg`}
          alt={`${name}`}
        />
        <div className="card-body">
          <h4 className="card-title">
            <button
              data-session-id={id}
              className={favorite ? "favoritebutton" : "favoritedarkbutton"}
              onClick={e => {
                onFavoriteHandler(e, !favorite);
              }}
            />
            <span>{name}</span>
          </h4>
          <span>{detail}</span>
        </div>
      </div>
    );
  }
);

export default WhiskeyDetail;
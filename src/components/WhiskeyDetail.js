import ImageToggleOnMouseover from "./ImageToggleOnMouseover";

const WhiskeyDetail = React.memo(
  ({ id, name, proof, favorite, detail, onFavoriteHandler }) => {
    //Proof that memoizing this component doesnt rerender all components on Whiskeys component
    console.log(`Whiskey details: ${id} ${name} ${proof} ${favorite}`);

    return (
      <div className="card">
        <ImageToggleOnMouseover
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

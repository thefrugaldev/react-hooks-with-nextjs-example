import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../static/site.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import WhiskeyData from "./WhiskeyData";
import WhiskeyDetail from "./WhiskeyDetail";

const Whiskeys = ({}) => {
  const [isBourbon, setIsBourbon] = useState(true);
  const [isRye, setIsRye] = useState(true);

  const [whiskeyList, setWhiskeyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const whiskeyListServerFilter = WhiskeyData.filter(({ bourbon, rye }) => {
        return (isBourbon && bourbon) || (isRye && rye);
      });
      setWhiskeyList(whiskeyListServerFilter);
    });
    return () => {
      console.log("cleanup");
    };
  }, []);

  const whiskeyListFiltered = isLoading
    ? []
    : whiskeyList
        .filter(({ bourbon, rye }) => (isBourbon && bourbon) || (isRye && rye))
        .sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

  const handleChangeBourbon = () => {
    setIsBourbon(!isBourbon);
  };

  const handleChangeRye = () => {
    setIsRye(!isRye);
  };

  const favoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-session-id"].value);
    setWhiskeyList(
      whiskeyList.map(whiskey => {
        if (whiskey.id === sessionId) {
          whiskey.favorite = favoriteValue;
          return whiskey;
        }
        return whiskey;
      })
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar my-5">
          <div className="hide">
            <h5>Filter by Type of Whiskey: </h5>
            <div className="form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleChangeBourbon}
                checked={isBourbon}
              />
              <label className="form-check-label">Bourbons</label>
            </div>
            <div className="form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleChangeRye}
                checked={isRye}
              />
              <label className="form-check-label">Ryes</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
            {whiskeyListFiltered.map(
              ({ id, name, detail, proof, favorite }) => {
                return (
                  <WhiskeyDetail
                    key={id}
                    id={id}
                    name={name}
                    proof={proof}
                    favorite={favorite}
                    detail={detail}
                    onFavoriteHandler={favoriteHandler}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whiskeys;

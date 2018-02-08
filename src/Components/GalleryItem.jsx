import React from "react";

const styles = {
  container: {
    boxSizing: "border-box",
    padding: "6px 6px",
    float: "left",
    width: "19.9999%",
    minWidth: "264px",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    height: "auto"
  },
  name: {
    fontWeight: 'bold'
  }
};

const MAX_RATING = 5;

function RatingStars({ rating }) {
  let res = [];

  for (let i = 0; i < MAX_RATING; i++) {
    if (i < rating) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return (
    <div>
      {res.map((val, key) => {
        if (val) return <span key={key}>&#9733;</span>;
        else return <span key={key}>&#9734;</span>;
      })}
    </div>
  );
}

export default ({ itemObject, onClick }) => (
  <div style={styles.container} onClick={onClick}>
    <img style={styles.image} src={itemObject.imageUrl} />
    <div>
      {itemObject.category}, <span>{itemObject.location}</span>
    </div>
    <div style={styles.name}>{itemObject.name}</div>
    <div>&#x20A4;{itemObject.price}</div>
    <RatingStars rating={itemObject.rating} />
  </div>
);

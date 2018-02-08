import React from "react";
import GalleryItem from "./GalleryItem";

const styles = {
  title: { 
    fontFamily: "sans-serif" 
  },
  container: {
    width: '80%',
    margin: '0 auto',
  }
};

export default ({ name, itemsArray, onItemClick }) => (
  <div style={styles.container}>
    <h1 style={styles.title}>{name}</h1>
    {
      itemsArray.map((item, key) =>
        <GalleryItem key={key} itemObject={item} onClick={onItemClick.bind(null, item)}/>)
    }
  </div>
);

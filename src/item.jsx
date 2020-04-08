/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

function Item(prop) {
  const { item } = prop;
  return (
    <div style={styles.item}>
      <div style={styles.top}>
        <strong><p style={styles.p}>{item.name}</p></strong>
        <p style={styles.p}>{item.price}</p>
      </div>
      <p style={styles.p}>{item.description}</p>
    </div>
  );
}

export default Item;

const styles = {
  item: {
    width: '200px',
    height: '150px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'gray',
    borderRadius: '15px',
    padding: '10px',
    margin: '10px',
  },
  top: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  p: {
    color: 'white',
  },
};

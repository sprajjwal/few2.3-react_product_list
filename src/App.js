/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import data, { categories, histogram } from './data';
import Item from './item';

// adding All to histgram and categories
categories.push('All');
histogram.All = data.length;

const styles = {
  container: {
    margin: 'auto',
    width: '80vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categories: {
    width: '80vh',
    margin: 'auto',
  },
  category: {
    backgroundColor: '#4ca688',
  },
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: data,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(field) {
    const category = field.item;
    if (category === 'All') {
      this.setState({ stateData: data });
    } else {
      const newData = data.reduce((acc, item) => {
        if (item.category === category) {
          acc.push(item);
        }
        return acc;
      }, []);
      this.setState({ stateData: newData });
    }
  }

  render() {
    const { stateData } = this.state;
    return (
      <div>
        <div style={styles.categories}>
          {categories.map((item) => (
            <button
              type="button"
              onClick={() => {
                this.onClick({ item });
              }}
              style={styles.category}
            >{item}({histogram[item]})
            </button>
          ))}
        </div>
        <div style={styles.container}>
          {stateData.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

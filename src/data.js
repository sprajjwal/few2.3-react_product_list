/* eslint-disable react/jsx-filename-extension */
import React, {Component} from 'react';
import data from './data.json';


const histogram = data.reduce((acc, item) => {
  if (acc[item.category] === undefined) {
    acc[item.category] = 1;
  } else {
    acc[item.category] += 1;
  }
  return acc;
}, {});

const categories = Object.keys(histogram);

export default data;
export { categories, histogram };

// class Data extends Component {
//   constructor() {
//     this.state = {
//       categories: [],
//       histogram: {},
//     };
//   }

//   getCategories() {
//     const histogram = {};
//     const categories = data.map((item) => {
//       histogram[item.categories] = histogram.get(item.categories, 0) + 1;
//       return item.categories;
//     });
//     this.setState({ histogram, categories });
//   }

//   render() {
//     this.getCategories();
//     const { histogram } = this.state;

//     return (
//       <ul>
//         {histogram.map((item) => {
//           return (<l1>{item}</l1>);
//         })
//         }
//       </ul>
//     );
//   }
// }


// export default Data;
// arr.reduce((accumulator, value) => {}, initialzer_for_accumulator)

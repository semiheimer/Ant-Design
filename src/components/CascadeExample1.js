import { Card, Cascader } from 'antd';
import React from 'react';
const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

const onChange = (value) => {
  console.log(value);
};
const CascadeExample1 = () => (
  <Card     style={{
    width: '50%',
  }}>
    <Cascader
    style={{
      width: '100%',
    }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
  </Card>
);
export default CascadeExample1;
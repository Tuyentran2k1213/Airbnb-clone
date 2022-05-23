import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function ItemLocation({data}) {
  return (
    <Card
    hoverable
    style={{
      width: 350,
      margin: 10
    }}
    cover={<img className=' object-fit h-52' alt="example" src={data.image} />}
  >
    <Meta title={data.name} description={data.province} />
  </Card>
  )
}

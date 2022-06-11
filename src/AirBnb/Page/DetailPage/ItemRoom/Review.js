import { Rate, Avatar, Image } from 'antd';

export default function Rating({ ...props }) {
    return (
        <>
        <div>
        <h1>4.4</h1>
        <Rate disabled allowHalf defaultValue={2.5} />
        . 42 reviews
        </div>
        <div>
        <Avatar
      src={
        <Image
          src="https://joeschmoe.io/api/v1/random"
          style={{
            width: 32,
          }}
        />
      }
    />
        <span>
            name of him
        </span>
        </div>
        <div>
        <Rate disabled allowHalf defaultValue={2.5} />
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptates?
        </div>
        </>
    )
}
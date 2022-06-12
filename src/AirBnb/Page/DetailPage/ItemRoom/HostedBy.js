import { Avatar, Image } from "antd";

export default function HostedBy({...props}) {
    return (
        <>
        <Avatar
      src={
        <Image
          src={`https://i.pravatar.cc/100?u=${props.roomId}`}
          style={{
            width: 64,
          }}
        />
      }
      size={64}
    />
        </>
    )
}
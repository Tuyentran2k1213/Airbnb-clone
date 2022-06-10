import { Rate, Input } from 'antd';
const { TextArea } = Input;

export default function YourReview() {
    return (
        <>
            <Rate allowHalf/>
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </>
    )
}
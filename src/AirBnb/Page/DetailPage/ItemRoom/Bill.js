import React from 'react';
import { DatePicker, Button, Popover } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

export default function Bill() {

  const text = <span>Title</span>;
  const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

    const dateFormat = 'DD/MM/YYYY';

    const startTime = moment(moment(1654604497863)._d, dateFormat);
    const endTime = moment(moment(1654604497363)._d, dateFormat);

    return (
        <div className='w-[600px]'>
          <div>
            <h1>
            $369 night
            </h1>
          </div>
          <div>
          <div className='w-[500px]'>
            <RangePicker
            defaultValue={[startTime, endTime]}
            format={dateFormat}
      status="error"
      style={{
        width: '100%',
      }}
    />
            </div>
            <div>  
            <Popover placement="bottom" title={text} content={content} trigger="click">
        <Button>Bottom</Button>
      </Popover>

            </div>
          </div>
          <div>
            <button>Reverse</button>
          </div>
          <div>
            <div>
            <Popover placement="topRight" title={text} content={content} trigger="click">         
            <a>fdjnf</a>
      </Popover>
            </div>
            <div>
            <Popover placement="topRight" title={text} content={content} trigger="click">         
            <a>fdjnf</a>
      </Popover>
            </div>
            <div>
            <Popover placement="topRight" title={text} content={content} trigger="click">         
            <a>fdjnf</a>
      </Popover>
            </div>
          </div>
        </div>
    )
}

{/* <Popover.Panel focus className="absolute top-12 -left-[11rem] inset-x-0 p-2 transition h-[100px] w-[270px] transform origin-top-right z-50">
<div className="rounded-lg drop-shadow-2xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
  <div className="flex flex-col items-start dropdown-list-link">
    <a className='font-medium'>
      Tin nh???n
    </a>
    <a className='font-medium'>
      Th??ng b??o
    </a>
    <a className='font-medium'>
      Chuy???n ??i
    </a>
    <a className='font-medium border-b border-gray-300'>
      Danh s??ch y??u th??ch
    </a>
    <a>
      Cho thu?? nh??
    </a>
    <a>
      T??? ch???c tr???i nghi???m
    </a>
    <a className='border-b border-gray-300'>
      T??i kho???n
    </a>
    <a>
      Tr??? gi??p
    </a>
    <a>
      ????ng xu???t
    </a>
  </div>
</div>
</Popover.Panel> */}

{/* <span className={`userBtnGr h-10 w-20 flex items-center justify-around rounded-[20px] border border-gray-300`}>u
                  <Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
    </Avatar>
                </span> */}
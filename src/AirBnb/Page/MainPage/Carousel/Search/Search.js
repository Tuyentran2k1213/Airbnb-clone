import React, { useState } from "react";
import { Select, Button, DatePicker } from "antd";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Search() {
  let navigate = useNavigate();

  let [location, setLocation] = useState();

  const onChange = (value) => {
    setLocation(value);
  };

  const onSearch = (value) => {
    setLocation(value);
  };

  let { dsTinh2 } = useSelector((state) => state.provinceReducer);
  return (
    <>
      <Select
        style={{
          width: 300,
        }}
        showSearch
        placeholder="Chọn địa điểm muốn đến"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        className="select"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
      >
        {dsTinh2.map((item) => {
          return <Option value={`${item}`}>{item}</Option>;
        })}
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
      <RangePicker
        className="picker"
        renderExtraFooter={() => "extra footer"}
      />
      <Select
        showArrow={false}
        defaultValue="số thành viên"
        style={{ width: 200 }}
      >
        <Option value="1">đi một mình</Option>
        <Option value="2">đi cặp đôi</Option>
        <Option value="3">đi theo gia đình</Option>
        <Option value="4">đi theo đoàn nhóm</Option>
        <Option value="5">đi công tác</Option>
      </Select>
      <NavLink to={`/detail/${location}`} target={"_blank"}>
        <Button
          target={"_blank"}
          className="button"
          type="primary"
          icon={<SearchOutlined />}
        >
          Search
        </Button>
      </NavLink>
    </>
  );
}

import React from "react";
import { createFromIconfontCN, InstagramOutlined } from "@ant-design/icons";
import { Space } from "antd";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export default function Footer() {
  return (
    <div className="footer my-10">
      <div className="footer_container container mx-auto py-10">
        <div className="footer_upper ">
          <div className="footer_upper-item">
            <h1>Hỗ trợ</h1>
            <ul>
              <li>
                <a href="">Trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="">Thông tin an toàn</a>
              </li>
              <li>
                <a href="">Các tùy chọn hủy</a>
              </li>
              <li>
                <a href="">
                  Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                </a>
              </li>
              <li>
                <a href="">Hỗ trợ người khuyết tật</a>
              </li>
              <li>
                <a href="">Báo cáo lo ngại của hàng xóm</a>
              </li>
            </ul>
          </div>
          <div className="footer_upper-item">
            <h1>Cộng đồng</h1>
            <ul>
              <li>
                <a href="">Airbnb.org: nhà ở cứu trợ</a>
              </li>
              <li>
                <a href="">Hỗ trợ dân tị nạn Afghanistan</a>
              </li>
              <li>
                <a href="">Chống phân biệt đối xử</a>
              </li>
            </ul>
          </div>
          <div className="footer_upper-item">
            <h1>Đón tiếp khách</h1>
            <ul>
              <li>
                <a href="">Thử đón tiếp khách</a>
              </li>
              <li>
                <a href="">AirCover: bảo vệ cho Host</a>
              </li>
              <li>
                <a href="">Xem tài nguyên đón tiếp khách</a>
              </li>
              <li>
                <a href="">Truy cập diễn đàn cộng đồng</a>
              </li>
              <li>
                <a href="">Đón tiếp khách có trách nhiệm</a>
              </li>
            </ul>
          </div>
          <div className="footer_upper-item">
            <h1>Giới thiệu</h1>
            <ul>
              <li>
                <a href="">Trang tin tức</a>
              </li>
              <li>
                <a href="">Tìm hiểu các tính năng mới</a>
              </li>
              <li>
                <a href="">Thư ngỏ từ các nhà sáng lập</a>
              </li>
              <li>
                <a href="">Cơ hội nghề nghiệp</a>
              </li>
              <li>
                <a href="">Nhà đầu tư</a>
              </li>
              <li>
                <a href="">Airbnb Luxe</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_lower">
          <div className="footer_lower-left">
            <div className="item">© 2022 Copyright</div>
            <div className="item">
              <a href="">Quyền riêng tư</a>
            </div>
            <div className="item">
              <a href="">Điều khoản</a>
            </div>
            <div className="item">
              <a href="">Sơ đồ trang web</a>
            </div>
          </div>
          <div className="footer_lower-right">
            <Space>
              <a href="https://projectairbnb.vercel.app/#!">
                <IconFont type="icon-tuichu" />
              </a>
              <a href="https://www.facebook.com/">
                <IconFont type="icon-facebook" />
              </a>
              <a href="https://twitter.com/">
                <IconFont type="icon-twitter" />
              </a>
              <a href="https://www.instagram.com/">
              <InstagramOutlined />
              </a>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}

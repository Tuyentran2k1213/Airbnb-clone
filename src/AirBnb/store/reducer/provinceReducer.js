import {
  SET_DANH_SACH_TINH,
  SET_DANH_SACH_TINH_2,
} from "../constant/provinceConstant";

let initialState = {
  dsTinh: [
    {
      name: "Hồ Chí Minh",
      image:
        "https://vietjet.net/includes/uploads/2019/04/Ve-may-bay-di-sai-gon-600x399.jpeg",
      province: "Hồ Chí Minh",
      rental: 0,
    },
    {
      name: "Hà Nội",
      image:
        "https://owa.bestprice.vn/images/destinations/uploads/trung-tam-thanh-pho-ha-noi-603da1f235b38.jpg",
      province: "Hà Nội",
      rental: 0,
    },
    {
      name: "Đà Nẵng",
      image:
        "https://img.nhandan.com.vn/Files/Images/2021/03/23/40692162_9381807_image_a_23_1616-1616460198504.jpg",
      province: "Thành phố Đà Nẵng",
      rental: 0,
    },
    {
      name: "Nha Trang",
      image:
        "https://media.mia.vn/uploads/blog-du-lich/duong-tran-phu-nha-trang-noi-anh-den-chua-bao-gio-tat-1622551297.jpg",
      province: "Nha Trang1234",
      rental: 0,
    },
    {
      name: "Bà Rịa - Vũng Tàu",
      image:
        "https://static1.cafeland.vn/cafelandnew/hinh-anh/2022/05/19/70/ba-ria.jpg",
      province: "Tỉnh Bà Rịa - Vũng Tàu",
      rental: 0,
    },
    {
      name: "Đà Lạt",
      image:
        "http://datphongmuongthanh.com/wp-content/uploads/2021/10/dalat3.jpg",
      province: "Đà Lạt",
      rental: 0,
    },
    {
      name: "Phú Quốc",
      image:
        "https://gotadi.com/tour/wp-content/uploads/2021/11/nhung-dia-diem-du-lich-noi-tieng-o-phu-quoc.jpg",
      province: "Phú Quốc",
      rental: 0,
    },
    {
      name: "Hội An",
      image:
        "https://image.thanhnien.vn/w660/Uploaded/2022/ayhukbf/2021_02_11/pho-co-hoi-an-1_aqpu.jpg",
      province: "Hội An",
      rental: 0,
    },
  ],
  dsTinh2: [],
};

const provinceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_TINH: {
      return { ...state, dsTinh: action.payload };
    }
    case SET_DANH_SACH_TINH_2: {
      return { ...state, dsTinh2: action.payload};
    }
    default:
      return { ...state };
  }
};
export default provinceReducer;

export default function useRandLocation() {
    const location = [{
        name: 'Đà Nẵng',
        coor: {
          lat: 16,
          lng: 108,
        }
      },{
        name: 'tp Hồ Chí Minh',
        coor: {
            lat: 10.82,
            lng: 106.6,
        }
      },{
        name: 'Nha Trang, Khánh Hòa',
        coor: {
            lat: 12.25,
            lng: 109.19,
        }
      },{
        name: 'tp Đà Lạt, Lâm Đồng',
        coor: {
            lat: 11.94,
            lng: 108.46,
        }
      },{
        name: 'Hà Nội',
        coor: {
            lat: 21.028,
            lng: 105.83
        },
      },{
        name: 'tp Vinh',
        coor:{
            lat: 18.68,
        lng: 105.68,
        }
      },{
        name: 'Phú Quốc',
        coor: {
            lat: 10.29,
            lng: 103.98,
        }
      },{
        name: 'tp Huế',
        coor: {
            lat: 16.46,
            lng: 107.59,
        }
      },{
        name: 'tp Vũng tàu',
        coor: {
            lat: 10.41,
            lng: 107.14,
        }
      },{
        name: 'tỉnh Hà Giang',
        coor: {
            lat: 22.8,
            lng: 104.98,
        }
      },{
        name: 'Hải Phòng', 
        coor: {
        lat: 21.027763, lng: 105.834160
      } }]

    const loacationLength = location.length;
    const randNum = Math.floor(Math.random() * loacationLength);

    return location[randNum];
}
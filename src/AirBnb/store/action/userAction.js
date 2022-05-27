import { message } from 'antd';
import { USER_LOGIN, USER_SIGNUP } from "../constant/userConstant";
import { httpServ, localStorageServ } from '../../Service/Service'
import httpUserMana from '../../Service/http.service/http.usersMana';

const { httpUserAuth } = httpServ;

export const LoginAction = data => {
    const { email, password } = data;
    
    try{
    if(!email || !password) {
          console.log('missing data');  
    } else {
        return (dispatch => {
            httpUserAuth.dangNhap(data)
                .then(res => {
                    if(data.remember){
                        localStorageServ(res.data.user);
                    }
                    dispatch({
                        type: USER_LOGIN,
                        payload: res.data.user,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }
} catch {
    console.error();
}
}

export const SignupAction = data => {
    const { name, email, password, phone, birth, gender, address } = data;

    try{
        if(!name || !email || !password  || !phone || !birth || !gender || !address){
            console.log('missing data');
        } else {
            return (() => {
                httpUserAuth.dangKy(data)
                    .then(res => {
                        message.success('This is a success message');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        }
    } catch {
        console.error();
    }
}

export const getDetailUser = data => {
    try{
        if(!data){
            console.log('missing data');
        } else {
            return (dispatch => {
                httpUserMana.layThongTinChiTietNguoiDung(data)
                    .then(res => {
                        dispatch({
                            type: USER_LOGIN,
                            payload: res.data,
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        }
    } catch {
        console.error();
    }
}
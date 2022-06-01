import { message } from 'antd';
import { USER_LOGIN, USER_SIGNUP } from "../constant/userConstant";
import { httpServ, localStorageServ } from '../../Service/Service'
import httpUserMana from '../../Service/http.service/http.usersMana';
import { useNavigate } from 'react-router-dom';

const { httpUserAuth } = httpServ;

export const LoginAction = payload => {
    const { email, password } = payload.data;
    const { onAction, onClose } = payload;

    try{
    if(!email || !password) {
          console.log('missing data');  
    } else {
        return (dispatch => {
            onAction(true);
            httpUserAuth.dangNhap(payload.data)
                .then(res => {
                    onAction(false);
                    if(payload.data.remember){
                        localStorageServ.userInfor.set(res.data.user);
                    }
                    if(onClose){
                        onClose();
                    }
                    dispatch({
                        type: USER_LOGIN,
                        payload: res.data.user,
                    })
                })
                .catch(err => {
                    onAction(false);
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
        if(!name || !email || !password  || !phone || !birth || !address){
            console.log('missing data');
        } else {
            return (() => {
                return httpUserAuth.dangKy(data)
                    .then(res => {
                        message.success('This is a success message');
                        return res.isSuccess;
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

export const LogoutAction = () => {
    return dispatch => {
        localStorageServ.userInfor.remove()
        dispatch({
            type: USER_LOGIN,
            payload: null,
        })
    }
}

export const getDetailUser = data => {
    try{
        if(!data){
            console.log('missing data');
        } else {
            return (dispatch => {
                return httpUserMana.layThongTinChiTietNguoiDung(data)
                    .then(res => {
                        dispatch({
                            type: USER_LOGIN,
                            payload: res.data,
                        })
                        return false;
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
import { useEffect } from 'react';
import { httpServ } from '../../Service/Service';
import axios from 'axios';

import AdminPage from "./AdminPage/Admin";
import UserPage from "./UserPage/User";
import { localStorageServ } from '../../Service/Service';

export default function InnerPage() {
    // const RoutePage = localStorageServ.userInfor.type
    useEffect(() => {
        httpServ.httpUserMana.layDanhSachNguoiDung()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    if(localStorageServ.userInfor){ 
        return (
            <div>
            {
                localStorageServ.userInfor.type === "ADMIN" ? <AdminPage/> : <UserPage/>
            }
            </div>
        )
    } else {
        return (
            <UserPage/>
        )
    }
}
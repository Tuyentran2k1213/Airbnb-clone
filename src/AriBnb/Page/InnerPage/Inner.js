import AdminPage from "./AdminPage/Admin";
import UserPage from "./UserPage/User";
import { localStorageServ } from '../../Service/Service';

export default function InnerPage() {
    // const RoutePage = localStorageServ.userInfor.type
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
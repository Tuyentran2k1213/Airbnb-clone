// import MainRoom from "./ItemRoom/MainRoomPage";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useRandLocation } from '../../HOOK';


const MainRoom = lazy(() => import('./ItemRoom/MainRoomPage'));

export default function DetailRoom() {

    const param = useParams();
    const randLocation = useRandLocation();

    return (
        <Suspense fallback={<div>loading...</div>}>
            <div className="mt-[100px]">
            <MainRoom id_place={param.id}
                    randing={randLocation}/>
        </div>
        </Suspense>
    )
}
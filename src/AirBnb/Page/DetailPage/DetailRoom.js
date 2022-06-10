// import MainRoom from "./ItemRoom/MainRoomPage";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom"

const MainRoom = lazy(() => import('./ItemRoom/MainRoomPage'));

export default function DetailRoom() {

    const param = useParams();

    return (
        <Suspense fallback={<div>loading...</div>}>
            <div className="mt-[100px]">
            <MainRoom id_place={param.id}/>
        </div>
        </Suspense>
    )
}
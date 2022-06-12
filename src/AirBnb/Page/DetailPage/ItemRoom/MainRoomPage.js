import { useEffect } from "react";
import { Calender } from "../../../Component/Component";
import { DesignedIcon, FeaturedIcon } from "../../../assets/SpecialIcon";
import { useDispatch, useSelector } from "react-redux";
import { roomAction } from "../../../store";
import PlaceOffer from './PlaceOffer';
import Rating from "./Review";
import YourReview from "./YourReview";
import Bill from "./Bill";
import InlineMap from "../../../Component/InlineMap/InlineMap";
import HostedBy from "./HostedBy";
import { useRandLocation } from '../../../HOOK';
const key = 'AIzaSyALiRgSCrHgQmHxbmoWPFdGoVNUvG--wp0';

export default function MainRoom( {...props} ) {


    const dispatch = useDispatch();

    const { chitietPhong } = useSelector(state => state.roomReducer);

    let randLocation;
    const randLoca = useRandLocation(chitietPhong?.locationId?.province);
    if(chitietPhong) {
        randLocation = randLoca;
    }

    useEffect(() => {
        dispatch(roomAction.getDetailRoom(props.id_place))
    }, [])

    return (
        <>
        <div className="px-0 md:px-6 lg:px-12 xl:px-36">
            
            <h1 className="room-title">{chitietPhong?.name}</h1> <br/>
                <a href="#">
                    { chitietPhong?.locationId ? <span>{chitietPhong?.locationId?.name}, {chitietPhong?.locationId?.province}, {chitietPhong?.locationId?.country}</span> : <span>{randLocation?.name}, Viet Nam</span> }
                </a>
            {chitietPhong?.locationId ? <img src={chitietPhong?.locationId?.image} /> : <img src="https://www.w3schools.com/w3css/img_lights.jpg"/>}
            <div className="border-b-2 py-4">
                <h1 className="text-xl">{chitietPhong?.description}</h1>
                <div className="flex justify-between">
                    <div className="hosted-by-title">
                        <h1>This hosted by</h1>
                        <span>{chitietPhong?.bath} bath, {chitietPhong?.bedRoom} bed room, {chitietPhong?.guests} guests</span>
                    </div>
                    {chitietPhong ? <HostedBy roomId={chitietPhong._id} /> : ''}
                </div>
            </div>
            <div className="border-b-2 py-4">
                <div>
                    <DesignedIcon/>
                    jfdsbjfdbshjf
                    fbfkjdsfhsd
                </div>
                <div>
                    <FeaturedIcon/>
                    fsfsdnj
                    fmdskgmfs
                </div>
            </div>
            <div>
                <Bill/>
            </div>
            <div>
                <img className="h-[26px] w-[123px]" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="oke image" />
                <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                <a href="#">Learn more</a>
            </div>
            <div>
                <p>
                Quant self-catering cabin gently nestled into the historic family-run Dry Island. "Otter Cabin" is fitted out to a high standard with a double bedroom, shower room, open plan kitchen and living room and its own hot tub and decking area. This is a traditional self-catering unit. Kitchen basics and linens are provided. High-speed wifi is available. Unfortunately, the cabin is inaccessible to those with mobility difficulties.<br/>
                ... <br/>
                <b>Show more</b>
                </p>
            </div>
            <div>
                <h1>Where you'll sleep</h1>
            <img src={chitietPhong?.image} /> 
                <span>
                Bedroom
                {chitietPhong?.bedRoom} bed
                </span>
            </div>
            <div>
                <h1>
                What this place offers
                <div>
                    {chitietPhong ? <PlaceOffer offerPlace={chitietPhong}/> : ''}
                </div>
                </h1>
            </div>
            <div className="flex">
                <Calender/>
            </div>
            <div>
                <h1>Ratings and reviews</h1>
                <div>
                    <YourReview/>
                </div>
                <div>
                    <Rating/>
                </div>
            </div>
            <div>
                <InlineMap
                dataMarker={randLocation}
                dataInfo={chitietPhong?.locationId}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            <div>
                Quy tắc chung
            </div>
        </div>
        <footer>
            footer
        </footer>
        </>
    )
}
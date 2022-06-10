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
import { useRandLocation } from '../../../HOOK';
const key = 'AIzaSyALiRgSCrHgQmHxbmoWPFdGoVNUvG--wp0';

export default function MainRoom( {...props} ) {


    const dispatch = useDispatch();

    const { chitietPhong } = useSelector(state => state.roomReducer);

    const randLocation = useRandLocation();

    console.log(randLocation);

    useEffect(() => {
        dispatch(roomAction.getDetailRoom(props.id_place))
    }, [])

    return (
        <>
        <div>
            
            <h1>{chitietPhong?.name}</h1>
            <p>
                <a href="#">
                    { chitietPhong?.locationId ? <span>{chitietPhong?.locationId?.name}, {chitietPhong?.locationId?.province}, {chitietPhong?.locationId?.country}</span> : <span>{randLocation.name}, Viet Nam</span> }
                </a>
            </p>
            {chitietPhong?.locationId ? <img src={chitietPhong?.locationId?.image} /> : <img src="https://www.w3schools.com/w3css/img_lights.jpg"/>}
            <div>
                <h1>{chitietPhong?.description}</h1>
                <span>{chitietPhong?.bath} bath, {chitietPhong?.bedRoom} bed room, {chitietPhong?.guests} guests</span>
            </div>
            <div>
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
                <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="oke image" />
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
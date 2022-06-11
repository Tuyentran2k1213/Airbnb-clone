import { CgScreenMirror, CgGym } from 'react-icons/cg';
import { MdOutlineElevator, MdOutlineLocalLaundryService, MdOutlineHotTub, MdOutlineKitchen, MdOutlinePool, MdWifi, MdOutlineFireplace } from 'react-icons/md';
import { GiHeatHaze } from 'react-icons/gi';

export default function PlaceOffer({...props}) {

    console.log(props.offerPlace);

    const { cableTV, dryer, elevator, gym, heating, hotTub, indoorFireplace, kitchen, pool, wifi } = props.offerPlace;

    return (
        <>
            <div>
                { cableTV && <>
                    <CgScreenMirror/> Television</> }
            </div>
            <div>
                { dryer && <><MdOutlineLocalLaundryService/> dryer</> }
            </div>
            <div>
                { elevator && <><MdOutlineElevator/> Elevator</> }
            </div>
            <div>
               { gym && <> <CgGym/> Gym</> }
            </div>
            <div>
                { heating && <><GiHeatHaze/> Heat</> }
            </div>
            <div>
                { hotTub && <><MdOutlineHotTub/> Hot tub</> }
            </div>
            <div>
                { kitchen && <><MdOutlineKitchen/> Kitchen</> }
            </div>
            <div>
                { pool && <><MdOutlinePool/> Pool</> }
            </div>
            <div>
                { wifi && <><MdWifi/> Wifi</> }
            </div>
            <div>
                { indoorFireplace && <><MdOutlineFireplace/> Indoor fireplace</> }
            </div>
        </>
    )
}
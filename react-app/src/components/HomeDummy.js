import {useLoadScript} from "@react-google-maps/api"



export default function HomeDummy(){
const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
})
    if (!isLoaded) return <div className="loader"></div>

}

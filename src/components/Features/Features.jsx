import FeaturesList from "../FeaturesList/FeaturesList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

const Features = ({item}) => { 
    return <div>
<FeaturesList obj={item}/>
    <VehicleDetails item={item}/>
            </div>
}
export default Features;
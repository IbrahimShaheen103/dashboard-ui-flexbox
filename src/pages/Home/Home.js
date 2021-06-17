import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import Chart from '../../Components/charts/Chart';
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/widgetLg/WidgetLg' 
import './home.css'
import { userData } from "../../dummyData";
const Home = () => {
    return ( 
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className='homeWidgets'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
     );
}
 
export default Home;
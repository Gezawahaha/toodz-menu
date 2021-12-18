import "./featuredInfo.css";
//import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import NumberFormat from 'react-number-format'

export default function FeaturedInfo1() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Order</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"><NumberFormat 
                    className="price"
                    value={422}
                    displayType="text"
                    thousandSeparator={true}
                    suffix=" Orders"
                /></span>
        </div>
        <span className="featuredSub">Today</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales ETA</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"><NumberFormat 
                    className="price"
                    value={20000000}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="Rp "
                /></span>
        </div>
        <span className="featuredSub">Today</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Item</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"><NumberFormat 
                    className="price"
                    value={4221}
                    displayType="text"
                    thousandSeparator={true}
                    suffix=" Qty"
                /></span>
        </div>
        <span className="featuredSub">Today</span>
      </div>
    </div>
  );
}

import React from 'react'
import './confirmorder.css'
import { Visibility , CheckCircle , CancelRounded, PersonRounded} from "@material-ui/icons";
import { Button } from '@material-ui/core';
import NumberFormat from 'react-number-format'


export default function ConfirmOrder () {
    // const ButtonAct = ({ type }) => {
    //     return <button className={"confirmOrderButton " + type}>{type}</button>;
    //   };
    return (
    <div className="confirmOrder">
      <h3 className="confirmOrderTitle">Waiting For Confirmations</h3>
      <table className="confirmOrderTable">
        <tbody>
          <tr className="confirmOrderTr">
            <th className="confirmOrderTh">Customer Name</th>
            <th className="confirmOrderTh">Type</th>
            <th className="confirmOrderTh">Date Time</th>
            <th className="confirmOrderTh">Order</th>
            <th className="confirmOrderTh">Amount</th>
            <th className="confirmOrderTh">Action</th>
          </tr>
          <tr className="confirmOrderTr">
            <td className="confirmOrderUser">
                <PersonRounded />
              <span className="confirmOrderName">Nurul</span>
            </td>
            <td className="confirmOrderAmount">Dine-IN</td>
            <td className="confirmOrderDate">2 Jun 2021</td>
            <td className="confirmOrderAmount"><button className="widgetSmButton"><Visibility className="widgetSmIcon" />view</button></td>
            <td className="confirmOrderAmount"><NumberFormat 
                    className="price"
                    value={35000}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="Rp "
                /></td>
            <td className="confirmOrderStatus">
                <Button className="btn-cnfirm"><CheckCircle /> </Button>
                <Button className="btn-cancel"><CancelRounded /> </Button>
            </td>
          </tr>
          <tr className="confirmOrderTr">
            <td className="confirmOrderUser">
                <PersonRounded />
              <span className="confirmOrderName">Ageng</span>
            </td>
            <td className="confirmOrderAmount">Take Away</td>
            <td className="confirmOrderDate">2 Jun 2021</td>
            <td className="confirmOrderAmount"><button className="widgetSmButton"><Visibility className="widgetSmIcon" />view</button></td>
            <td className="confirmOrderAmount"><NumberFormat 
                    className="price"
                    value={5000}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="Rp "
                /></td>
            <td className="confirmOrderStatus">
                <Button className="btn-cnfirm"><CheckCircle /> </Button>
                <Button className="btn-cancel"><CancelRounded /> </Button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    )
}



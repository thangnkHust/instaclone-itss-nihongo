import React from 'react'
import "./WidgetLg.css";
function WidgetLg() {
    return (
        <div className="widgetLg">
      <h3 className="widgetLgTitle">Most Posts User</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Total Posts</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">thangnk</span>
          </td>
          <td className="widgetLgDate">12</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">thuc</span>
          </td>
          <td className="widgetLgDate">11</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">hungabc</span>
          </td>
          <td className="widgetLgDate">8</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">test</span>
          </td>
          <td className="widgetLgDate">8</td>
        </tr>
      </table>
    </div>
    )
}

export default WidgetLg

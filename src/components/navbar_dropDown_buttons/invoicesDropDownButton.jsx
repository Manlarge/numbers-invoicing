import React, { Component } from 'react';

class DropDownInvoiceButtonForNavBar extends Component {
    render() { 
        return ( 
            <div className="dropdown">
            <ul className="nav nav-pills">
            <li className="nav-item dropdown m-2">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Invoices</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">View Invoices</a>
                <a className="dropdown-item" href="#">Create Invoices</a>
              </div>
              </li>

              <li className="nav-item dropdown m-2">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Quotations</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">View Quotations</a>
                <a className="dropdown-item" href="#">Create Quotations</a>
              </div>
              </li>

              <li className="nav-item dropdown m-2">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Items</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">View Items</a>
                <a className="dropdown-item" href="#">Add new Items</a>
              </div>
              </li>

              <li className="nav-item dropdown m-2">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Customers</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">View Customers</a>
                <a className="dropdown-item" href="#">Add new Customers</a>
              </div>
              </li>

              <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
              <a className="nav-link active m-2" href="#">Company Setup</a>
              </li>
              <li className="nav-item m-2">
              <a className="nav-link active" href="#">Reports</a>
              </li>
              <li className="nav-item m-2">
              <a className="nav-link active" href="#">My Dashboard</a>
              </li>
              </ul>
            </ul>
            </div>
         );
    }
}
 
export default DropDownInvoiceButtonForNavBar;
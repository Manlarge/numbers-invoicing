import React, { Component } from 'react';
import DropDownInvoiceButtonForNavBar from '../navbar_dropDown_buttons/invoicesDropDownButton';


class Navbar extends Component {
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Numbers</a>
                    <DropDownInvoiceButtonForNavBar/>
                </nav>
            </div>
         );
    }
}

 
export default Navbar;
import React, { Component } from 'react';
import Navbar from '../nav/navbar';
import CustomerPanel from './customerDetails';
import InvoiceServiceItems from './invoiceItemDetails';

class CreateCustomerInvoiceViews extends Component {
    render() { 
        return ( 
            <div>
                <Navbar/>
                
                <CustomerPanel/>
                
                <InvoiceServiceItems/>
            </div>
         );
    }
}
 
export default CreateCustomerInvoiceViews;
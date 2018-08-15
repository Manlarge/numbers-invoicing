import React, { Component } from 'react';
import '../views/customerDetails.css';
import InvoiceDate from '../datepicker/datePicker';

class CustomerDetails extends Component {
    state = { 
        
     };
    render() { 
        return ( 
            <div className="">
                <fieldset>
                    <legend>Customer Details</legend>                     
                    <form className="form-horizontal">
                    <div className="">
                        <div className="form-inline">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Customer</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Customer 1</a>
                                        <a className="dropdown-item" href="#">Customer 2</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Cash Customer</a>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Invoice Date</span>
                                </div>
                                <InvoiceDate/>
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Invoice Number</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Discount %</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        </div>
                        
                        <div className="form-inline">
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Customer E-mail</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Contact Number</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Company Name</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    </form>
                </fieldset>
            </div>
         );
    }
}
 
export default CustomerDetails;
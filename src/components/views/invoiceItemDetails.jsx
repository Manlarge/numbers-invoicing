import React, { Component } from 'react';

class InvoiceServiceItems extends Component {
    state = {  };
    render() { 
        return ( 
            <div>
                <div className="">
                    <fieldset>
                        <legend>Items/Service Details</legend>                     
                        <form className="form-inline">
                            <div className="input-group">
                                <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Item</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Product 1</a>
                                        <a className="dropdown-item" href="#">Project 1</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Concept 1</a>
                                    </div>
                                </div>
                                <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing">Quantity</span>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" aria-describedby="inputGroup-sizing"/>
                                </div>
                                </div>

                                <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing">Unit Price</span>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" aria-describedby="inputGroup-sizing"/>
                                </div>
                                </div>

                                <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing">Total Amount</span>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" aria-describedby="inputGroup-sizing"/>
                                </div>
                                </div>

                                <button type="button" className="btn btn-danger btn-sm">Erase Line</button>
                            </div>
                        </form>
                        <div className="">
                            <div className="form-inline">
                                <button type="button" className="btn btn-success btn-sm">Add new line</button>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
         );
    }
}
 
export default InvoiceServiceItems;
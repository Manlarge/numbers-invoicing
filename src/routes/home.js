import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import CreateCustomerInvoiceViews from '../components/views/createInvoice';

export default () => (
    <BrowserRouter>
        <Route path="/" component={CreateCustomerInvoiceViews} />
    </BrowserRouter>
);
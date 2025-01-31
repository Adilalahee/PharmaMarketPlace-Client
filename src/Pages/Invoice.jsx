import React, { useContext } from 'react';
import logo from '../assets/logo_pharma_market.png'
import Authcontext from '../Context/Authcontext';
import Usecart from '../Components/Home/Usecart';
const Invoice = () => {
    const{user}=useContext(Authcontext)
    const [cart]=Usecart();
    const downloadInvoice = () => {
        
        const doc = new jsPDF();
    
        // Set up invoice content
        doc.setFont('helvetica');
        doc.setFontSize(12);
        doc.text('Invoice', 14, 20);
        doc.text('Date: January 31, 2025', 14, 30);
        doc.text('Invoice #: 123456789', 14, 40);
        doc.text('Company: Your Company Name', 14, 50);
        doc.text('Website: www.yourwebsite.com', 14, 60);
        
        // Add customer info
        doc.text('Customer Information:', 14, 80);
        doc.text('Name: John Doe', 14, 90);
        doc.text('Email: john.doe@example.com', 14, 100);
        doc.text('Address: 123 Main Street, City, Country', 14, 110);
    
        // Add purchase information
        doc.text('Purchase Information:', 14, 130);
        doc.text('Item 1: $50.00', 14, 140);
        doc.text('Item 2: $30.00', 14, 150);
        doc.text('Item 3: $20.00', 14, 160);
        doc.text('Total: $100.00', 14, 170);
    
        // Save PDF
        doc.save('invoice.pdf');
      };
    return (
        <>
        <div className="container mx-auto p-8">
      <div className="max-w-3xl mx-auto border border-gray-300 shadow-lg p-6 bg-white">
        <header className="text-center mb-8">
          <img src={logo} alt="Logo" className="mx-auto mb-4 w-32" />
          <h1 className="text-xl font-semibold">Invoice</h1>
        </header>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Customer Information</h2>
          <div className="space-y-1">
            <p><strong>Name:</strong>{user?.displayName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Purchase Information</h2>
          <div className="space-y-1">
            <p><strong>Tylenol</strong> $50.00</p>
            <p><strong>Tylenol</strong> $30.00</p>
            <p><strong>Tylenol</strong> $20.00</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Total</h2>
          <p className="font-bold text-lg">$100.00</p>
        </div>

        <div className="text-center">
          <button
            onClick={downloadInvoice}
            className="btn btn-primary mt-4"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
        </>
    );
};

export default Invoice;
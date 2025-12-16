import React from 'react';
import './PriceList.css'; // Add some custom styling

const PriceList = () => {
    return (
        <>
            <div className="price-list-header">
                <h1>Rivaan on nails Price List</h1>
            </div>
            <div className="price-list-container">

                <div className="price-category">
                    <h2>Acrylics</h2>
                    <ul>
                        <li>Short acrylic plain - 300</li>
                        <li>Medium acrylic plain - 350</li>
                        <li>Long acrylic plain - 400</li>
                        <li>Refill - 250</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Extras</h2>
                    <ul>
                        <li>Stones per finger - 80</li>
                        <li>Art per finger - 80</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Gel Builder</h2>
                    <ul>
                        <li>Gel builder short - 300</li>
                        <li>Gel builder medium - 350</li>
                        <li>Gel builder long - 400</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Overlay & Designs</h2>
                    <ul>
                        <li>Overlay - 250</li>
                        <li>French design - 100</li>
                        <li>Ombré nails short - 350</li>
                        <li>Ombré nails medium - 400</li>
                        <li>Ombré nails long - 450</li>
                        <li>Chrome - 100</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Other Services</h2>
                    <ul>
                        <li>Stick on Nails - 250</li>
                        <li>Toe acrylic with gel - 250</li>
                        <li>Gel polish - 150</li>
                        <li>Dissolving - 100</li>
                        <li>Manicure - 150</li>
                        <li>Pedicure - 250</li>
                        <li>Home service - X2</li>
                        <li>Pendicure gel - 300</li>
                        <li>Cat eye polish - 200</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PriceList;

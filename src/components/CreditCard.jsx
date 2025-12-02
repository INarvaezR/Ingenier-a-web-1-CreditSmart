import React from 'react'

export const CreditCard = ({ credit}) => {
   
    const {
        name,
        description,
        minAmount,
        maxAmount,
        interestRate,
        maxTern,
        requirenents,
        icon,
    } = credit;

    return (
        <div className='credit-card'>
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <div className="detil-item">
                    <span className="label">Plazo:</span>
                    <span className="value">hasta {maxTern} meses</span>
                </div>

                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>

                <div className="detil-item">
                    <span className="label">Plazo:</span>
                    <span className="value">hasta {maxTern} meses</span>
                </div>
                
                <div className="detil-item">
                    <span className="label">Plazo:</span>
                    <span className="value">hasta {maxTern} meses</span>
                </div>
            </div>
        </div>
    )
}

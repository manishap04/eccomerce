import React, { useState } from "react";

export default function Card({ products }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const Category = [
    { id: 1, value: 'fashion' },
    { id: 2, value: 'trend' },
    { id: 3, value: 'dashing' },
    { id: 4, value: 'stylist' }
  ];

  const handleChange = (id) => {
    // Check if the item is already checked
    const isChecked = checkedItems.includes(id);
    
    // If checked, remove it from the checkedItems array
    if (isChecked) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      // If not checked, add it to the checkedItems array
      setCheckedItems([...checkedItems, id]);
    }
  };

  return (
    <div className="d-flex justify-content-center ">
      <div className="d-flex flex-column p-3" style={{width:"20%"}}>
        <h5>Sort By</h5>
        {Category.map((cat) => (
          <li className="d-flex mx-auto m-1" key={cat.id}>
            <input 
              type="checkbox" 
              id={cat.id} 
              value={cat.value}  
              onChange={() => handleChange(cat.value)}  
              className="m-1"
            />
            <label htmlFor={cat.id}>{cat.value}</label>
          </li>
        ))}
      </div>
        {
          checkedItems.length>0?<div className="d-flex justify-content-center" style={{width:"80%"}}>
          {products.map((product) => {
            if(checkedItems.includes(product.category) && checkedItems.length>0){
              return (
                <div 
                  key={product.productid} 
                  className="card-body border bg-light border-primary m-4 shadow" 
                  style={{ maxWidth: "250px", height: "450px"}}
                >
                  <img src={product.image} alt={product.title} className="w-100 mb-3 h-50" />
                  <div>
                    <div>
                      <p className="text-center mb-1">{product.category}</p>
                    </div>
                    <div>
                      <p className="text-center mb-1 fs-4">
                        <b>{product.title}</b>
                      </p>
                    </div>
                    <div>
                      <p className="text-center">
                        <span className="text-decoration-line-through">${product.price}</span> <h5>${product.priceAfterDiscount}</h5>
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-primary">ADD</button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>:
        <div className="d-flex justify-content-center" style={{width:"80%"}}>
        {products.map((product) => (
          <div 
            key={product.productid} 
            className="card-body border bg-light border-primary m-4 shadow" 
            style={{ width: "15rem", height: "450px"}}
          >
            <img src={product.image} alt={product.title} className="w-100 mb-3 h-50" />
            <div>
              <div>
                <p className="text-center mb-1">{product.category}</p>
              </div>
              <div>
                <p className="text-center mb-1 fs-4">
                  <b>{product.title}</b>
                </p>
              </div>
              <div>
                <p className="text-center">
                  <span className="text-decoration-line-through">${product.price}</span> <h5>${product.priceAfterDiscount}</h5>
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-primary">ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
        }
    </div>
  );
}

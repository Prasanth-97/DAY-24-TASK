import React, { useState } from "react";

function Products(props) {
  console.log(props);
  const{value,item,setItems} = props;
  const [showBtn, setShowBtn] = useState(true);
  const handleCartAdd = ( setItems, item) => {
      setShowBtn(!showBtn)
      setItems(item + 1)
  }
  const handleCartRemove = ( setItems , item,) =>{
     setShowBtn(!showBtn)
     setItems(item - 1)
  } 
  return (

          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={props.value.img}
                alt="..."
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{props.value.productName}</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <h6>{props.value.rating}</h6>
                  </div>
                  {props.value.prize}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
          {showBtn ? <button onClick={()=>handleCartAdd( setItems, item)} className="btn btn-outline-dark mt-auto" >Add to cart</button> :
             <button onClick={()=>handleCartRemove( setItems, item)} className="btn btn-outline-dark mt-auto" >Remove from cart</button>}
                </div>
              </div>
            </div>
          </div>

  );
}

export default Products;



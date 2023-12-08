import React from "react";

export default function Card() {
   return (
      <div>
         <div>
            <div
               className="card mt-3"
               style={{ width: "18rem", maxHeight: "360px" }}>
               <img src="https://images.alphacoders.com/130/1308370.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                     Some important information about Card
                  </p>
                  <div className="container ">
                     <select className="m-2 h-100  bg-warning rounded">
                        {Array.from(Array(6), (e, i) => {
                           return (
                              <option key={i + 1} value={i + 1}>
                                 {i + 1}{" "}
                              </option>
                           );
                        })}
                     </select>

                     <select className="m-2 h-100  bg-warning rounded">
                        <option value="half">Half</option>
                        <option value="full">full</option>
                     </select>
                     <div className='d-inline h-100 fs-5'>
                        Total Price
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

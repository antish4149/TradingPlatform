import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL
}) {
  return ( 
    <div className="container mb-5">
      <div className="row  align-items-center">

        <div className="col-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore}>Learn More</a>
        </div>

        <div className="col-6 text-end">
          <img src={imageURL}  alt={productName} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;

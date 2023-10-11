import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProtocolDetails = React.memo(
  ({ name, logo, tvl, tvlChange, category }) => {
    return (
      <div className="rounded-md border py-10 flex flex-col items-center relative">
        <div className="w-40 h-40 bg-gray-100 rounded-xl">
          <LazyLoadImage
            src={logo}
            alt={name}
            className="w-40 h-40 object-cover bg-white"
            effect="blur"
          />
        </div>
        <p className="text-xl font-medium">{name}</p>
        <p>Total Value Locked: {tvl}</p>
        <p>1 Hour Change: {tvlChange}</p>
        <p>Category: {category}</p>
      </div>
    );
  }
);

export default ProtocolDetails;

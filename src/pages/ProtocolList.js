import React from "react";
import Skeleton from "../components/Skeleton";
import ProtocolDetails from "../components/ProtocolDetails";

const ProtocolList = ({ protocols, loading }) => {
  return (
    <div>
      {loading ? (
        <div
          role="status"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 animate-pulse"
        >
          {[...Array(4)].map((_, index) => (
            <Skeleton key={`skeleton_${index}`} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-14">
          {protocols.map((protocol, index) => (
            <ProtocolDetails
              key={`protocol_${index}`}
              name={protocol.name}
              logo={protocol.logo}
              tvl={protocol.tvl}
              tvlChange={protocol.change_1h}
              category={protocol.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProtocolList;

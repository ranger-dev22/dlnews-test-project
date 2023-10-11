import React, { useState, useEffect } from "react";
import ProtocolList from "./pages/ProtocolList";
import fetchData from "./apis/api";

const App = () => {
  const [protocols, setProtocols] = useState([]);
  const [filteredProtocols, setFilteredProtocols] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [chainFilter, setChainFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [chains, setChains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProtocols = async () => {
      try {
        const data = await fetchData();
        setProtocols(data);
      } catch (error) {
        console.error("Error fetching protocols:", error);
      } finally {
        setLoading(false);
      }
    };

    getProtocols();
  }, []);

  useEffect(() => {
    if (protocols.length === 0) {
      return;
    }
    const uniqueCategories = new Set();
    const uniqueChains = new Set();

    protocols.forEach((item) => {
      uniqueCategories.add(item.category);
      uniqueChains.add(item.chain);
    });

    setCategories(Array.from(uniqueCategories));
    setChains(Array.from(uniqueChains));
  }, [protocols]);

  useEffect(() => {
    const filteredData = protocols.filter((protocol) => {
      return (
        (categoryFilter === "" || protocol.category === categoryFilter) &&
        (chainFilter === "" || protocol.chain === chainFilter)
      );
    });

    setFilteredProtocols(filteredData);
  }, [categoryFilter, chainFilter, protocols]);

  return (
    <div className="flex flex-col items-center px-2 sm:px-14">
      <div className="max-w-[1440px] w-full">
        <div className="text-2xl font-medium py-4">DefiLlama Protocols</div>
        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <div>
            <label className="font-medium mr-2">Filter by Category:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded"
            >
              <option value="">All</option>
              {categories.map((item, index) => (
                <option key={`category_${index}`} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium mr-2">Filter by Chain:</label>
            <select
              value={chainFilter}
              onChange={(e) => setChainFilter(e.target.value)}
              className="border rounded"
            >
              <option value="">All</option>
              {chains.map((item, index) => (
                <option key={`chain_${index}`} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ProtocolList protocols={filteredProtocols} loading={loading} />
      </div>
    </div>
  );
};

export default App;

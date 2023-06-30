import React, { useEffect, useState } from "react";

const Recommendation = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    fetch(`https://fec-backend.onrender.com/item`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.slice(0, 100)); // Limit the items to the first 100
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex).map((item) => (
      <li key={item.item_name}>
        <img src={item.item_image} alt={item.item_name} />
        <div>
          <h5>{item.item_name}</h5>
          <p>Brand: {item.item_brand}</p>
          <p>Price: {item.item_price}</p>
        </div>
      </li>
    ));
  };

  return (
    <div className="recommendations-section" style={{ overflowX: "auto" }}>
      <h3 className="recommendations-header">
        Today's Recommendations for You
      </h3>
      <div className="recommendation-list-wrapper">
        {items.length > 0 ? (
          <ul className="recommendation-list">{renderItems()}</ul>
        ) : (
          <div className="no-recommendations">
            <h5 className="recommendation-subheader">No Recommendations Yet</h5>
            <p className="recommendation-text">
              We'll provide suggestions as you shop
            </p>
            <button className="today-special-button">
              Shop Today's Specials
            </button>
          </div>
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Recommendation;

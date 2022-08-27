import { useState } from "react";

const usePagination = () => {
  const ITEMS_PER_PAGE = 5;
  const [bounds, setBounds] = useState([0, ITEMS_PER_PAGE]);
  const [currentItems, setCurrentItems] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentItems([]);
    setPage(value);
    setBounds((prev) => [(value - 1) * ITEMS_PER_PAGE, value * ITEMS_PER_PAGE]);
  };

  return { bounds, handleChange, ITEMS_PER_PAGE, page };
};

export default usePagination;

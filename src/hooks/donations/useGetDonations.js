import { useEffect, useState } from "react";

const useGetDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const SLK = "sk_test_5f55171caf4eb07154eeaa55558a112634396c46";
  const myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer sk_live_a04eca368733f073cfa5ee7a4be78eed707ee138"
  );
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const numberWithCommas = (x) => {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    fetch("https://api.paystack.co/transaction", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // loadingNode.style.display = "none";
        const data = result.data;

        setDonations(data.filter(({ status }) => status === "success"));
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { donations, loading };
};

export default useGetDonations;

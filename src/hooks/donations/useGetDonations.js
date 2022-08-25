import { useEffect, useState } from "react";

const useGetDonations = () => {
  const [donations, setDonations] = useState([]);
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
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
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
        let count = 0;
        let amountTotal = 0;
        // data.forEach((trx) => {
        //   const {
        //     amount,
        //     authorization: { bank, channel },
        //     createdAt,
        //     currency,
        //     customer: { first_name, last_name },
        //     status,
        //   } = trx;
        //   if (status === "success") {
        //     const trxNode = document.createElement("tr");
        //     trxNode.innerHTML = `
        //     <td>${first_name} ${last_name}</td>
        //     <td>${currency} ${numberWithCommas(amount / 100)}</td>
        //     <td>${bank}</td>
        //     <td>${channel}</td>
        //     <td>${new Date(createdAt).toLocaleDateString("en-UK", options)}</td>
        //   `;
        //     donationsTableNode.style.display = "flex";
        //     document.querySelector("tbody").appendChild(trxNode);
        //     count++;
        //     console.log("amount", amountTotal);
        //     amountTotal += amount / 100;
        //     donationsAmountNode.innerHTML = `${currency} ${numberWithCommas(
        //       amountTotal
        //     )}`;
        //     donationsCountNode.innerHTML = `${count}`;
        //     footerNode.style.display = "flex";
        //   }
        // });
        console.log(result);
        setDonations(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return { donations };
};

export default useGetDonations;

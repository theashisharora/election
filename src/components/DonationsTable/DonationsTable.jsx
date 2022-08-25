// Imports
import React from "react";
import { Link } from "react-router-dom";
import { useGetDonations } from "../../hooks/donations";
import { DonationsTableWrapper } from "./styles";

const DonationsTable = () => {
  const { donations } = useGetDonations();

  return (
    <DonationsTableWrapper>
      <table class="donations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => {
            const {
              amount,
              authorization: { bank, channel },
              createdAt,
              currency,
              customer: { first_name, last_name },
              status,
            } = donation;

            if (status === "success") {
              return (
                <tr>
                  <td>
                    {first_name} {last_name}
                  </td>
                  <td>
                    {currency} {numberWithCommas(amount / 100)}
                  </td>

                  <td>
                    {new Date(createdAt).toLocaleDateString("en-UK", options)}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </DonationsTableWrapper>
  );
};

export default DonationsTable;

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

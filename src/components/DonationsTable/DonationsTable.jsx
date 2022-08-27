// Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetDonations } from "../../hooks/donations";
import Loader from "../Loader/Loader";
import { DonationsTableWrapper } from "./styles";
import { usePagination } from "../../hooks";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const DonationsTable = () => {
  const { donations, loading } = useGetDonations();
  const { bounds, handleChange, ITEMS_PER_PAGE, page } =
    usePagination(donations);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(donations.length);
  }, [donations]);
  return (
    <DonationsTableWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <table class="donations-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <article className="body-container">
              <tbody>
                {donations.slice(bounds[0], bounds[1]).map((donation) => {
                  const {
                    amount,
                    authorization: { bank, channel },
                    createdAt,
                    currency,
                    customer: { first_name, last_name },
                    status,
                  } = donation;

                  return (
                    <div className="row-container">
                      <tr>
                        <td>
                          {first_name} {last_name}
                        </td>
                        <td>
                          {currency} {numberWithCommas(amount / 100)}
                        </td>

                        <td>
                          {new Date(createdAt).toLocaleDateString(
                            "en-UK",
                            options
                          )}
                        </td>
                      </tr>
                    </div>
                  );
                })}
              </tbody>
            </article>
          </table>
        </>
      )}

      {count > 0 ? (
        <div className="pagination">
          <p className="pagination__summary">
            Showing {bounds[0] + 1} to {bounds[1] > count ? count : bounds[1]}{" "}
            accounts of {count}
          </p>

          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(count / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChange}
            />
          </Stack>
          {/* <Link to={"/home"}>See more banks</Link> */}
        </div>
      ) : (
        <></>
      )}
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

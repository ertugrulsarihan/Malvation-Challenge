import React, { useEffect } from "react";
import Card from "../../src/card.png";
import { BiMoney } from "react-icons/bi";
import { CgDollar } from "react-icons/cg";
import M from "materialize-css/dist/js/materialize.min.js";

export default function Pay({ cost, show }) {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elems, {});
    });
  }, []);
  return (
    <div className="side">
      <img src={Card} alt="card image" />

      <table class="bordered pay-table">
        <thead>
          <tr>
            <th class="center">
              {" "}
              <span style={{ color: "white", fontSize: "25px" }}>
                <BiMoney size="30px" />
                2000$
              </span>
            </th>
            {show ? (
              <th class="center">
                <span style={{ color: "white", fontSize: "25px" }}>
                  <CgDollar size="30px" />
                  {cost}$
                </span>
              </th>
            ) : null}
          </tr>
        </thead>
      </table>
      <div
        style={{ marginTop: "25px", display: "flex", flexDirection: "column" }}
      >
        <button className="btn btn-primary">Pay</button>
      </div>
    </div>
  );
}

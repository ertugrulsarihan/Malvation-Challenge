import React, { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
import { BsFillTrash2Fill } from "react-icons/bs";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Pay from "./Pay";

export default function Expense() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const item = useRef(null);
  const price = useRef(null);
  const [cost, setCost] = useState(0);
  const [listNames, setListNames] = useState([]);
  const [listPrices, setListPrices] = useState([]);

  const addList = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: uuid(),
        name: item.current.value,
        price: Number(price.current.value),
      },
    ]);
  };
  useEffect(() => {
    if (list.length === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    let namesList = [];
    let priceList = [];
    for (let j = 0; j < list.length; j++) {
      namesList.push(list[j].name);
    }
    let temp = 0;
    for (let i = 0; i < list.length; i++) {
      temp += parseInt(list[i].price);
      priceList.push(list[i].price);
    }
    setListPrices(priceList);
    setCost(temp);
    setListNames(namesList);
  }, [list, show]);

  const deleteList = (id, i) => {
    let newList = list.filter((k) => id !== k.id);
    setList(newList);
  };

  return (
    <div className="row">
      <div className=" col-12 col-md-8 row main ">
        <form class="col-12 col-md-6">
          <div class="row">
            <div class="input-field col-12">
              <i class="material-icons prefix">add</i>
              <input id="icon_prefix" type="text" class="validate" ref={item} />
              <label style={{ color: "black" }} for="icon_prefix">
                Expense
              </label>
            </div>
            <div class="input-field col-12">
              <i class="material-icons prefix">attach_money</i>
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                ref={price}
              />
              <label style={{ color: "black" }} for="icon_telephone">
                Price
              </label>
            </div>
            <button
              onClick={(e) => addList(e)}
              className="btn btn-success waves-effect"
            >
              ADD
            </button>
          </div>
        </form>
        <div className="col-12 col-md-6">
          <PieChart listPrices={listPrices} listNames={listNames} />
        </div>

        <div className="row">
          <div class="responsive-table table-status-sheet col-12">
            <table class="bordered">
              <thead>
                <tr>
                  <th class="center">Expense</th>
                  <th class="center">Price</th>
                </tr>
              </thead>
              <tbody>
                {list.map((l) => (
                  <div className="list container" key={l.id}>
                    <p>
                      <b>{l.name}</b>
                    </p>
                    <p>
                      <b>{l.price}$</b>
                    </p>
                    <p>
                      <button
                        style={{ width: "25px", height: "25px" }}
                        onClick={() => {
                          deleteList(l.id);
                        }}
                        className="btn"
                      >
                        <BsFillTrash2Fill
                          style={{
                            padding: "1px",
                            position: "relative",
                            left: "-6px",
                            top: "-6px",
                          }}
                        />
                      </button>
                    </p>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 right-bar">
        <Pay show={show} cost={cost} />
      </div>

      <div className="row">
        <div className=" container bar">
          <BarChart cost={cost} />
        </div>
      </div>
    </div>
  );
}

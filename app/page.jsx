"use client";
import Data from "@components/Data";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineDelete,
} from "react-icons/ai";

const getData = () => {
  let list = localStorage.getItem("Data");

  if (list) {
    return JSON.parse(localStorage.getItem("Data"));
  } else {
    return [];
  }
};

const page = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(getData());
  const [completed, setCompleted] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!value) {
    } else if (value && completed) {
      setItems(
        items.map((x) => {
          if (x.id === isEditItem) {
            return { ...items, name: value, completed: !completed };
          }
          return x;
        })
      );
      setCompleted(false);
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: value,
        completed: completed,
      };
      setItems([...items, allInputData]);
      setValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  // const handleDeleteAll = () => {
  //   setItems([]);
  // };

  return (
    <section className="container todo_container">
      <div className="row gy-3">
        <div className="col-md-6">
          <Image
            src="./assets/undraw_online_calendar_re_wk3t.svg"
            alt="undraw_online_calendar_re_wk3t.svg"
            width={1000}
            height={1000}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>
              Todo <span>list</span>
            </h1>
            <div className="input_container mt-3 mb-3">
              <input
                type="text"
                id="input"
                className="form-control"
                placeholder="Enter here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <AiOutlinePlus className="fa_icon" onClick={addItem} />
            </div>
            <div className="overflow">
              {items.map((list, index) => {
                return (
                  <Data
                    key={list.id}
                    AiOutlineCheckCircle={AiOutlineCheckCircle}
                    AiOutlineDelete={AiOutlineDelete}
                    items={items}
                    setItems={setItems}
                    value={value}
                    completed={completed}
                    list={list}
                    index={index}
                  />
                );
              })}
            </div>
            {/* <div className="btn_delete">
              <div></div>
              <button onClick={handleDeleteAll}>delete all</button>
            </div> */}
            <div className="dev">
              <Link href="" className="link">
                ybon.dev
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;

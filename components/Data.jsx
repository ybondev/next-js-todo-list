"use client";

const Data = (props) => {
  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = props.items.filter((list, index) => {
      return index !== id;
    });

    props.setItems(updatedItems);
  };

  const handleCheck = (list) => {
    props.setItems(
      props.items.map((item) => {
        if (item.id === list.id) {
          return { ...item, completed: !item.completed };
        }
        console.log(item.id, list.id);
        return item;
      })
    );
  };
  return (
    <>
      <div className="data_container mt-2" key={props.index}>
        <div className={`display ${props.list.completed ? "complete" : ""}`}>
          <p className={`${props.list.completed ? "complete" : ""}`}>
            {props.list.name}
          </p>
          <div className="icon">
            <props.AiOutlineCheckCircle
              className="fa_icon"
              onClick={() => handleCheck(props.list)}
            />
            <props.AiOutlineDelete
              className="fa_icon"
              onClick={() => deleteItem(props.index)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;

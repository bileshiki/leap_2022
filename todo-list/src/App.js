import React, { useState, useTransition } from "react";
import "./App.css";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

//id, title, isDone
function App() {
  const init = {
    id: "",
    task: "",
    type: 0,
    isImportant: false,
    isDone: false,
  }

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [ID, setId] =useState("0");
  const [modal, setModal] = useState(false);

  const [taskObj, setTaskObj] = useState(init)

  const [doneTotal, setDoneTotal] = useState(0);

const addTask = (e) => {
  const newObj = {
    id: createdId (), title: task, isDone: false,
  };
  const newArr = [...tasks];

  if (ID !== "0") {
    newArr.map((e) => {
      if (e.id === ID) {
        e.title=task;
      }
      return e;
    });
  } else {
    newArr.push(newObj);
  }
  
}
      setTasks(newArr);

      setTask("");
      setId("0");
      setModal(false);
 

  // Delete Button
  const deleteItem = (id) => {
    const delTask = tasks.filter((e) => {
      return e.id !== id;
    });
    setTasks(delTask);
  };



  //edit button
  function editTask(id) {
    tasks.map((e) => {
      if (e.id === id) {
        setTask(e.title);
        setInput(id);
      }
    });
  }

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      console.log(val);
      if (val.id === id) {
        val.isDone = !val.isDone;

        setDoneTotal(doneTotal + 1);
      }
      return val;
    });

    setTasks(objList);
    ShowDoneTotal();
  };

  function ShowDoneTotal() {
    const arr = tasks.filter((e) => e.isDone === true);

    setDoneTotal(arr.length);
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h1>Todo List</h1>
          Total {tasks.length}
          <p>Done {doneTotal}</p>
          <div className="d-flex gap-3">
            <input
              className="form-control"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="task oruulna uu"
            />
            <button className="btn btn-primary" onClick={addTask}>
              +Add
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          {tasks.map((e) => (
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="d-flex col-md-8">
                <input
                  type="checkbox"
                  checked={e.isDone}
                  onChange={() => onDoneTask(e.id)}
                />
                <input type="hidden" value={input} />
                <h4>{e.title}</h4>
              </div>
              <div className="row col-md-4 justify-content-between">
                <button
                  className="btn btn-warning col-5"
                  onClick={() => editTask(e.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger col-5"
                  onClick={() => deleteItem(e.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {modal && (
              <Modal modal={modal} setModal ={handleModal} task= {task} id={ID} setTask={setTask} addTask={addTask}/>
            )}
        </div>
      </div>
    </div>
  );
          }

export default App;

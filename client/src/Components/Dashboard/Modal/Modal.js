import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Modal.css";
import { Statuses } from "./Statuses";

const Modal = ({ isOpenModal, handleClose }) => {
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [userID, setUserID] = useState({});
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState({});

  useEffect(async () => {
    const resp = await axios.get("http://localhost:5000/api/users");
    if (!resp.errors) {
      setUsers(resp.data);
    }
    const res = await axios.get("http://localhost:5000/api/categories");
    if (!res.errors) {
      setCategories(res.data);
    }
  }, []);

  return (
    isOpenModal && (
      <div className="modal">
        <div className="modal-content">
          <div className="title">
            <div>Add New Task</div>
            <div className="modal-close" onClick={() => handleClose()}>
              X
            </div>
          </div>
          <div className="signup-form">
            <div>ADD NEW TASK</div>
            <form>
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="enter task name"
                />
              </div>
              <div>
                <select onChange={(e) => setStatus(e.target.value)}>
                  {Statuses &&
                    Statuses.length > 0 &&
                    Statuses.map((status) => {
                      return (
                        <option name="`${status.id}`"> {status.name}</option>
                      );
                    })}
                </select>
              </div>
              <div>
                <select onChange={(e) => setUserID(e.target.value)}>
                  {users &&
                    users.length > 0 &&
                    users.map((user) => {
                      return <option name="`${user.id}`"> {user.email}</option>;
                    })}
                </select>
              </div>
              <div>
                <select onChange={(e) => setCategoryId(e.target.value)}>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category) => {
                      return (
                        <option name="`${category.id}`">
                          {" "}
                          {category.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </form>
            <button className="btn-signup">SAVE</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

import React, { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.css";
import ContainerBox from "./components/ContainerBox/ContainerBox";
import Pagination from "./components/Pagination/Pagination";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import FilterForm from "./components/FilterForm/FilterForm";
import Clock from "./components/Clock/Clock";

function App() {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    // _limit: 10,
    // _totalRows: 50,
  });

  const [filter, setFilter] = useState({
    _limit: 20,
    _page: 1,
    title_like: "",
  });

  // fetch api
  useEffect(() => {
    async function getAPI() {
      try {
        const params = queryString.stringify(filter);
        const postURL = `http://js-post-api.herokuapp.com/api/posts?${params}`;

        const res = await fetch(postURL);
        const resJSON = await res.json();
        // console.log(resJSON);
        const { data, pagination } = resJSON;
        setList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }

    getAPI();
  }, [filter]);

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  // To-do List local CRUD
  function handleRemoveClick(todo) {
    // console.log(todo);
    const index = list.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const cloneList = [...list];
    cloneList.splice(index, 1);
    setList(cloneList);
  }

  function handleAddItem(formValues) {
    const realIndex = list.length - 1;
    const item = {
      id: realIndex < 0 ? 0 : list[realIndex].id + 1,
      ...formValues,
    };

    const newList = [...list];
    newList.push(item);
    setList(newList);
    console.log(item);
  }

  function handleSearchTermChange(fValues) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: fValues.searchTerm,
    });
  }

  return (
    <div className="app">
      <div className="content">
        <h1>Fetch API & Pagination & Debounce using useEffect()</h1>
        <Clock />
        <FilterForm onFilterTermChange={handleSearchTermChange} />
        <TodoList todoList={list} onTodoClick={handleRemoveClick} />
        {/* <TodoForm onSubmit={handleAddItem} /> */}
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>

      <ContainerBox itemList={list} />
    </div>
  );
}

export default App;

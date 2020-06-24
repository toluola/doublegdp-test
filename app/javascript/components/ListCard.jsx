import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useFetch from "../utils/useFetch"

const ListCard = () => {
  const { data, isLoading } = useFetch("/lists/index");

  const checkBoxOnclick = async (id) => {
    const url = `/lists/${id}`
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const updateList = await fetch(url, {
      method: "PATCH",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    });

    if (updateList) {
      window.location.reload(false)
    }
  }

  const noList = <div>No item available. Please add an item</div>
  const listLoading = <div>Loading...</div>

  return (
    <div>
      {isLoading && listLoading}
      {data.message === "No item available. Please add an item" && noList}
      {data.length > 0 && data.map(list => (
        <ListWrapper key={list.id}>
          <img src={list.avatar} alt="user-avatar" height="50" width="50" />
          <p className="description">{list.description}</p>
          {list.checked ? (<p className="date">{list.time}</p>) : (<div className="check-box"><input type="checkbox" onClick={() => checkBoxOnclick(list.id)} /></div>)}
        </ListWrapper>
      ))}
    </div>
  )
}

const ListWrapper = styled.div`
  display: flex;
  img {
    border: 1px;
    border-radius: 50%;
    padding: 15px;
  }
  .description {
    flex-basis: 200px;
    display: flex;
    align-items: center;
  }
  .date {
    font-size: 15px;
  }
  .check-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
  }
`

export default ListCard;
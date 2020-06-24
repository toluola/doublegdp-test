import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ListCard = props => {
  const [checked, setChecked] = useState(false)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const url = "lists/index"

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        if (response.ok) {
          setData(result)
        } else {
          setHasError(true)
          setErrorMessage(result)
        }
        setIsLoading(false)
      } catch (err) {
        setHasError(true)
        setErrorMessage(err.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

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
      setChecked("true")
    }
  }

  return (
    <div>
      {data.map(list => (
        <ListWrapper key={list.id} status={checked}>
          <img src={list.avatar} alt="user-avatar" height="50" width="50" />
          <p className="description">{list.description}</p>
          {checked ? (<div>checked</div>) : null} 
          {list.checked ? (<p className="date">{list.time}</p>) : (<div className="check-box"><input type="checkbox" onClick={() => checkBoxOnclick(list.id)}/></div>)}
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
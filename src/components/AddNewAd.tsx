import React, { useState } from "react";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;


const NewAdPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const addNewAd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post(BASE_URL + "/addNewAd", {
      name: name,
      price: price,
      url: url,
      category: category,
      userId: userId,
      city: city,
      description: description

    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <h1>Add new ad</h1>
      <form onSubmit={addNewAd}>
        <div>
          <label >Name of the product:</label>
          <input
            type="name"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}>
          </input>
        </div>
        <div >
          <label>Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={(e) => setPrice(e.target.value)}>
          </input>
        </div>
        <div >
          <label>Choose photo:</label>
          <input
            type="file"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}>
          </input>
        </div>
        <div>
          <div>
            <label> Category:</label>
            <select id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="" >Choose a category:</option>
              <option value="clothing">clothing</option>
              <option value="toys">toys</option>
              <option value="sports">sports</option>
              <option value="tools">tools</option>
              <option value="pets">pets</option>
              <option value="games">games</option>
              <option value="baby">baby</option>
              <option value="technology">technology</option>
            </select>
          </div>
          <div>
            <label>Username:</label>
            <input
              type="userId"
              name="userId"
              id="userId"
              onChange={(e) => setUserId(e.target.value)}
            ></input>
          </div>
          <div >
            <label>City:</label>
            <input
              type="city"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label>Product description</label>
            <textarea id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}>
            </textarea>
          </div>
        </div>
        <div>
          <button type="submit" value="addNewAd">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewAdPage;
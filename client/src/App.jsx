import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Manager from "./views/Manager"
import Detail from "./views/Detail"
import Update from "./views/Update"

function App() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <h1>Product Manager</h1>
        <Routes>
          <Route path="/" element={<Manager />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/products/:id/edit" element={<Update />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

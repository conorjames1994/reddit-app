import { useState } from "react";

export function SearchBarButton () {

  

  return (
    <div>
    <input value={searchTerm} onChange={changeHandler}></input>
    <button />
    </div>
  )
}
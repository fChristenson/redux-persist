import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateForm } from "./store";

export const Bar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.app);

  return (
    <div>
      <form
        style={{
          padding: "16px",
          display: "flex",
          flexFlow: "column",
          maxWidth: "200px",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={(e: any) => dispatch(UpdateForm("name", e.target.value))}
        />
        <select
          value={state.gender}
          onChange={(e: any) => dispatch(UpdateForm("gender", e.target.value))}
          name="gender"
        >
          <option value="">Gender</option>
          <option value="spacemachine">Spacemachine</option>
          <option value="basketball">Basketball</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={state.address}
          onChange={(e: any) => dispatch(UpdateForm("address", e.target.value))}
        />
      </form>
      <div>
        <a href="/baz">Thanks for infomrations, now go buy many things</a>
      </div>
    </div>
  );
};

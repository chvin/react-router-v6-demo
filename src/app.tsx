import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
          to="invoices"
        >
          Invoices
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
          to="expenses"
        >
          Espenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

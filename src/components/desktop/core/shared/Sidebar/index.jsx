import Link from "next/link";
import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
const index = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link href="/documentation" />}>
          {" "}
          Documentation
        </MenuItem>
        <MenuItem component={<Link href="/calendar" />}> Calendar</MenuItem>
        <MenuItem component={<Link href="/e-commerce" />}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default index;

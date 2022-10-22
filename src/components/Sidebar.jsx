import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/content";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
      }}
    >
      {categories.map((categories) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(categories.name)}
          key={categories.name}
          style={{
            backgroundColor: categories.name === selectedCategory && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: categories.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {categories.icon}
          </span>
          <span
            style={{
              opacity: categories.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {categories.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

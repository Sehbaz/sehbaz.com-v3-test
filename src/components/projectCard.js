import React from "react"

export default function projectCard() {
  return (
    <div
      style={{
        display: `flex`,
        width: `100%`,
        boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        marginBottom: `2rem`,
      }}
    >
      <div
        style={{
          width: `40%`,
          padding: `1rem`,
        }}
      >
        <h1>Hello</h1>
      </div>
      <div
        style={{
          backgroundColor: `#bdc3c7`,
          width: `60%`,
          padding: `1rem`,
        }}
      >
        {" "}
      </div>
    </div>
  )
}

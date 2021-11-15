import React from "react";
import Card from "../containers/Card";

const CardList = ({ users }) => {
  return (
    <section id="card-grid">
      {users.map((user, i) => {
        return (
          <Card
            key={users[i].id}
            id={users[i].id}
            name={users[i].name}
            email={users[i].email}
          />
        );
      })}
    </section>
  );
};

export default CardList;

import React from "react";
import Button from "../../components/Button/Button";

const ContactPage = () => {
  const handleClick = () => {
    console.log("Handle clique");
  };
  return (
    <>
      <h1>Pagina de contato</h1>
      <Button text="Default" disabled={false} onClick={handleClick} />
    </>
  );
};

export default ContactPage;

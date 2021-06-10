import { useState } from "react";

export const Flipicon = (props) => {
  const [icono, setIcono] = useState(props.icono1);
  const canviarIcona = () => {
    if (icono === props.icono1) {
      setIcono(props.icono2);
    } else {
      setIcono(props.icono1);
    }
  };

  return <i className={"fas " + icono} onClick={canviarIcona}></i>;
};

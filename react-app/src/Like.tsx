import { useState } from "react";
import { FcLike, FcDislike } from "react-icons/fc";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
 
  const toggle =()=>{
    setStatus(!status);
    onClick();
  }
  if (status) return <FcLike size={40} onClick={toggle} />;
  return <FcDislike size={30} onClick={toggle} />;
};

export default Like;

import {  ReactNode } from "react";

const Button = ({ onClick, children }: { onClick: () => void  ,children: ReactNode }) => {
  return <button
  className="bg-blue-500 text-white text-2xl font-semibold px-4 py-3 text-center rounded-xl hover:bg-blue-300 hover:text-zinc-900 duration-300"
  onClick={onClick}>{children}</button>;
};

export default Button;

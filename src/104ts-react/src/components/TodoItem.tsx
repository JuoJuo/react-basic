import * as React from "react";

interface IProps {
  title: string;
}

const TodoItem: React.SFC<IProps> = (props: IProps) => {
  return <div>{props.title}</div>;
};

export default TodoItem;

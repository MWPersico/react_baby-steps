type Props = {
  action: string;
  style: object;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => {
    name: string;
    age: number;
    isMan: boolean;
  };
};

export function Form(props: Props) {
  return (
    <form style={props.style}>
      <input type="text" name="name"/>
      <input type="number" name="age"/>
      <input type="checkbox" name="isMan"/>
      <button onClick={props.handleClick}>{props.action}</button>
    </form>
  );
}

export const Input = (props: any) => {
  return (
    <>
      <div style={{margin: '10px'}}>
        <label htmlFor={props.id}>
          {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
        </label>
        <input
          id={props.id}
          type={props.id}
        />
      </div>
    </>
  );
};

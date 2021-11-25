export default function TodoItems({
  id,
  title,
  status,
  handleDlt,
  handleToggle
}) {
  return (
    <div>
      <span>{`${title} - ${status}`}</span>
      <button id={id} onClick={() => handleDlt(id)}>
        X
      </button>
      <button id={id} onClick={() => handleToggle(id)}>
        {" "}
        Toggle{" "}
      </button>
    </div>
  );
}

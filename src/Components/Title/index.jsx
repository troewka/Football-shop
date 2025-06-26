import "./styles.scss";

const Title = ({ inputValue, text, color, size }) => {
  let className = "";
  switch (size) {
    case "S":
      className = "title title__s";
      break;
    case "M":
      className = "title title__m";
      break;
    case "L":
      className = "title title__l";
      break;
    default:
      className = "title";
  }

  return (
    <div>
      <h2 style={{ color: color }} className={className}>
        {inputValue ? `Поиск по запросу: "${inputValue}"` : text}
      </h2>
    </div>
  );
};

export default Title;

const SectionGroup = (props) => {
  const style = {
    display: "flex",
    gap: "0.3rem",
  };

  return <li style={style}>{props.children}</li>;
};

export default SectionGroup;

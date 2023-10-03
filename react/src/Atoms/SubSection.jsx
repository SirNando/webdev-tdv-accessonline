import "./SubSection.css"

const SubSection = (props) => {
  return (
    <section className="SubSection">
      <h2>{props.title}</h2>
      <ul>{props.children}</ul>
    </section>
  );
};

export default SubSection;

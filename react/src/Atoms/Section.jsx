import "./Section.css"

const Section = (props) => {
  return (
    <section className="Section">
      <h2>{props.title}</h2>
      <ul>{props.children}</ul>
    </section>
  );
};

export default Section;

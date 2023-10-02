import "./Section.css"

const Section = (props) => {
  const sectionTitle = props.title;

  const listStyles = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const headingStyles = {
    textAlign: "center",
    margin: "1rem",
    marginTop: 0,
    padding: 0,
  };

  return (
    <section className="Section">
      <h2 style={headingStyles}>{sectionTitle}</h2>
      <ul style={listStyles}>{props.children}</ul>
    </section>
  );
};

export default Section;

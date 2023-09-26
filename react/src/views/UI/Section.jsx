const Section = (props) => {
  const sectionTitle = props.title;

  const listStyles = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const sectionStyles = {
    maxWidth: "40rem",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",
  };

  const headingStyles = {
    textAlign: "center",
    margin: "1rem",
    marginTop: 0,
    padding: 0,
  };

  return (
    <section style={sectionStyles}>
      <h2 style={headingStyles}>{sectionTitle}</h2>
      <ul style={listStyles}>{props.children}</ul>
    </section>
  );
};

export default Section;

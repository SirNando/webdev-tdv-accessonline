
const SubSection = (props) => {
  return (
    <section className="w-auto p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-center m-4 mt-0 p-0">{props.title}</h2>
      <ul className="list-none m-0 p-0">{props.children}</ul>
    </section>
  );
};

export default SubSection;

export default function Section({ title, children, subsection }) {
  const styling = { section: "", h2: "" };

  if (subsection) {
    styling.section = "w-auto p-4 rounded-lg border-3 my-2";
    styling.h2 = "text-center m-4 mt-0 p-0 text-2xl";
  } else {
    styling.section = "h-fit w-full p-4 min-w-[45rem] rounded-lg shadow-lg";
    styling.h2 = "text-center m-4 mt-0 p-0 text-4xl";
  }

  return (
    <section className={styling.section}>
      <h2 className={styling.h2}>{title}</h2>
      <ul className="list-none m-0 p-0">{children}</ul>
    </section>
  );
}

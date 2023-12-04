
export default function Section  ({title, children}) {
  return (
    <section className="h-fit w-full p-4 min-w-[45rem] rounded-lg shadow-lg">
      <h2 className="text-center m-4 mt-0 p-0 text-4xl">{title}</h2>
      <ul className="list-none m-0 p-0">{children}</ul>
    </section>
  );
};

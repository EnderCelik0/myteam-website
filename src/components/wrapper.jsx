export default function Wrapper({ bg, children }) {
  return (
    <div className={`${bg} relative overflow-hidden`}>
      <div className="mx-auto min-w-[20.438rem] max-w-[69.375rem]">
        {children}
      </div>
    </div>
  );
}

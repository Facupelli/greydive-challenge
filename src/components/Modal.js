export default function Modal({ children }) {
  return (
    <>
      <aside className="fixed bg-white z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-4 shadow-md rounded">
        {children}
      </aside>
      <div className="fixed bg-gray-700 opacity-60 z-20 w-full h-screen"></div>
    </>
  );
}

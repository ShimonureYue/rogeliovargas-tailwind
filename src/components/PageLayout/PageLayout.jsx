export default function  PageLayout ({ children }) {
  return (
    <>
      <main className="m-[30px]">
        {children}
      </main>
      <div className="fixed top-0 left-0 w-full h-[30px] bg-blue-light z-20" />
      <div className="fixed right-0 top-0 w-[30px] h-full bg-blue-light z-20" />
      <div className="fixed bottom-0 left-0 w-full h-[30px] bg-blue-light z-20" />
      <div className="fixed left-0 top-0 w-[30px] h-full bg-blue-light z-20" />
    </>
  );
} 
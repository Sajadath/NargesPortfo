function DvhBoxContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 w-full min-h-dvh flex">
      <div className=" grow p-7 border border-lightGray/50 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default DvhBoxContainer;

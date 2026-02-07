function FitBoxContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 flex ">
      <div className="shrink-0 grow p-7 border border-lightGray/50 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default FitBoxContainer;

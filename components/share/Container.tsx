export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="lg:max-w-[1300px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto bg-slate-200 min-h-screen flex flex-col border-l border-r">
        {children}
      </div>
    );
  }
export function Skeleton() {
  return (
    <aside className="w-80 absolute top-0 bottom-0 right-0 border-l border-x-zinc-800 divide-y-2 divide-zinc-800 bg-zinc-800 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
      <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-full border-l border-x-zinc-900 divide-y-2 divide-zinc-900 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
        <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-8 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-9"></div>
                </div>
                <div className="grid grid-cols-8 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-9"></div>
                </div>
                <div className="grid grid-cols-8 gap-">
                  <div className="h-2 bg-slate-700 rounded col-span-9"></div>
                </div>

                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

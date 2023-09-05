import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const {currentModule, currentLesson} =  useCurrentLesson()



const isCourseLoading = useAppSelector((state) => state.player.isLoading);


  return (
    <div className="flex flex-col gap-1">
      {isCourseLoading ? (
        <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-28 h-2 bg-slate-700 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
          <span className="text-sm text-zinc-400">
            Módulo "{currentModule?.title}"
          </span>
          </>
      )}
    
    </div>
  );
}

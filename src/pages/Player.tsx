import { MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { VideoPlayer } from '../components/VideoPlayer';
import { Module } from '../components/Module';
// import { useAppDispatch, useAppSelector } from '../store';
// import { loadCourse, useCurrentLesson } from '../store/slices/player';
import { useEffect } from 'react';
import { Skeleton } from '../components/Skeleton';
import { useCurrentLesson, useStore } from '../zustand-store';

export function Player() {
  const {course, load, isLoading} = useStore(store => {
    return {
      course: store.course,
      load: store.load,
      isLoading: store.isLoading
    }
  })
  // const dispatch = useAppDispatch();
  // const modules = useAppSelector((state) => state.player.course?.modules);

  // const { currentLesson } = useCurrentLesson();
  const { currentLesson } = useCurrentLesson();

  // useEffect(() => {
  //   dispatch(loadCourse());
  // }, []);

   useEffect(() => {
    load()
  }, []);

  console.log(course)

    useEffect(() => {
    if (currentLesson) {
      document.title = `${currentLesson.title}`;
    }
  }, [currentLesson]);

  // useEffect(() => {
  //   if (currentLesson) {
  //     document.title = `${currentLesson.title}`;
  //   }
  // }, [currentLesson]);

  // const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-cyan-800 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-950">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          {isLoading ? (
            <Skeleton />
          ) : (
            <aside className="w-80 absolute top-0 bottom-0 right-0 border-l border-x-zinc-800 divide-y-2 divide-zinc-900 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
              {course?.modules &&
                course.modules.map((module, index) => {
                  return (
                    <Module
                      key={module.id}
                      moduleIndex={index}
                      title={module.title}
                      amountOfLesson={module.lessons.length}
                    />
                  );
                })}
            </aside>
          )}
        </main>
      </div>
    </div>
  );
}

import Player from 'react-player';
// import { next, useCurrentLesson } from '../store/slices/player';
// import { useAppDispatch, useAppSelector } from '../store';
import { Loader } from 'lucide-react';
import { useCurrentLesson, useStore } from '../zustand-store';

export function VideoPlayer() {
  // const dispatch = useAppDispatch();
  // const { currentLesson } = useCurrentLesson();
  const { currentLesson } = useCurrentLesson();
  const {isLoading, next} = useStore(store => {
    return {
      isLoading: store.isLoading,
      next: store.next
    }
  });
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  function handlePlayNext() {
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <Player
          width="100%"
          height="100%"
          controls
          onEnded={handlePlayNext}
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}

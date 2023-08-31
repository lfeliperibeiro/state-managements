import { ChevronDown } from 'lucide-react';
import { Lesson } from './Lesson';

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLesson: number;
}

export function Module({moduleIndex, title, amountOfLesson }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong>{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLesson} aulas</span>
        </div>
        <ChevronDown className="h-5 w-5 ml-auto text-zinc-400" />
      </button>
      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title='Fundamentos do Redux' duration='09:15'/>
        <Lesson title='Fundamentos do Redux' duration='07:30' />
        <Lesson title='Fundamentos do Redux' duration='05:30' />
      </nav>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getProgress, markLesson } from "@/lib/progress";

export function LessonToggle({ lessonId }: { lessonId: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDone(!!getProgress().lessonsCompleted[lessonId]);
  }, [lessonId]);

  return (
    <button
      onClick={() => {
        const next = !done;
        markLesson(lessonId, next);
        setDone(next);
      }}
      className={
        "shrink-0 rounded-full w-8 h-8 flex items-center justify-center border transition-colors " +
        (done
          ? "bg-gold-400 text-ink-900 border-gold-400"
          : "bg-ink-700 text-ink-300 border-ink-500 hover:border-gold-400")
      }
      aria-label={done ? "Mark as not done" : "Mark as done"}
      title={done ? "Done" : "Mark as done"}
    >
      {done ? "✓" : ""}
    </button>
  );
}

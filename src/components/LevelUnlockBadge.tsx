"use client";

import { useEffect, useState } from "react";
import { isLevelUnlocked } from "@/lib/progress";
import { useT } from "@/i18n/client";

export function LevelUnlockBadge({ levelNum }: { levelNum: number }) {
  const t = useT();
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  useEffect(() => {
    setUnlocked(isLevelUnlocked(levelNum));
  }, [levelNum]);

  if (unlocked === null) return null;
  if (unlocked) return <span className="chip text-green-300 border-green-500/30">{t.common.unlocked}</span>;
  return <span className="chip text-ink-300">{t.common.locked}</span>;
}

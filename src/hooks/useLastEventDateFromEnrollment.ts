import { useMemo } from "react";
import { useEnrollment } from "./useEnrollment";

export function useLastEventDateFromEnrollment(enrollmentId: string) {
  const { enrollment, loading } = useEnrollment(enrollmentId);

  const date = useMemo(() => {
    if (!enrollment) return undefined;
    const sortedEvents = enrollment.events
      .filter((e) => e.occurredAt)
      .sort((a, b) => (a.occurredAt < b.occurredAt ? 1 : -1));
    return sortedEvents.length > 0 ? sortedEvents[0].occurredAt : undefined;
  }, [enrollment]);

  return {
    loading,
    date,
  };
}

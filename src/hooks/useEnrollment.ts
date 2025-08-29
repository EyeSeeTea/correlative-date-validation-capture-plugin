import { FetchError, useDataQuery } from "@dhis2/app-runtime";
import { useEffect, useMemo } from "react";

export const useEnrollment = (enrollmentId: string): UseEnrollmentResult => {
  const { error, loading, data, refetch } = useDataQuery(
    useMemo(
      () => ({
        enrollment: {
          resource: "tracker/enrollments/",
          id: ({ variables: { enrollmentId: updatedEnrollmentId } }) =>
            updatedEnrollmentId,
          params: {
            fields: "events[event,occurredAt]",
          },
        },
      }),
      []
    ),
    { lazy: true }
  );
  useEffect(() => {
    enrollmentId && refetch({ variables: { enrollmentId } });
  }, [refetch, enrollmentId]);
  return {
    error,
    loading,
    enrollment: data ? (data?.enrollment as EnrollmentData) : undefined,
  };
};

export type UseEnrollmentResult = {
  error: FetchError | undefined;
  loading: boolean;
  enrollment: EnrollmentData | undefined;
};

export type EnrollmentData = {
  events: Array<{
    event: string;
    occurredAt: string;
  }>;
};

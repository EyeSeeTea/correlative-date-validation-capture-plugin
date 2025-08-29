import "./main.css";
import React, { useMemo } from "react";
import { IDataEntryPluginProps } from "./Plugin.types";
import i18n from "@dhis2/d2-i18n";
import { useLastEventDateFromEnrollment } from "./hooks/useLastEventDateFromEnrollment";
import { NoticeBox } from "@dhis2/ui";
const PluginInner = (propsFromParent: IDataEntryPluginProps) => {
  const { date: lastEventDate } = useLastEventDateFromEnrollment(
    propsFromParent.values.enrollmentId
  );
  const occurredAt = propsFromParent.values.occurredAt;

  const warnDate = useMemo(() => {
    if (!lastEventDate || !occurredAt) return false;
    return occurredAt < lastEventDate;
  }, [occurredAt, lastEventDate]);

  if (propsFromParent.viewMode || !warnDate) {
    return null;
  }
  const lastEventDateFormatted = lastEventDate.replace(/T.*/, "");
  return (
    <div>
      <NoticeBox
        title={i18n.t("Date warning")}
        warning
        className="warning-container"
      >
        <p>
          {i18n.t(
            "The date of the current event is before the date of the last event in this enrollment."
          )}
        </p>
        <ul className="warning-details">
          <li>
            <b>{i18n.t("Current Event")}:</b>
            {occurredAt}
          </li>
          <li>
            <b>{i18n.t("Last Event Date")}:</b>
            {lastEventDateFormatted}
          </li>
        </ul>
      </NoticeBox>
    </div>
  );
};

export default PluginInner;

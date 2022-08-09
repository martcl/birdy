import React from "react"

import parseDate from "./parseDate"
import EventDate from "./EventDate"


const eventTime = (startRaw, endRaw) => {
  const start = parseDate(startRaw)
  const end = parseDate(endRaw)

  start.locale("nb")
  end.locale("nb")

  if (start.isSame(end, "day")) {
    return (
      <p>
        {start.format("HH:mm")}–{end.format("HH:mm")}
      </p>
    )
  }

  return null
}

const calendarUnit = (calendar) => calendar.split("/")[0]

const EventItem = ({
  data: { id, start, end, summary, location, description, organizer, calendar },
}) => (
  <div key={id}>
    <EventDate start={start} end={end} />
    <div>
      <h2>
        {summary}
      </h2>
      <div>
        {eventTime(start, end)}
        {location && <p>{location}</p>}
        {description && (
          <p>{description}</p>
        )}
      </div>
    </div>
  </div>
)

export default EventItem

import React from "react"

import parseDate from "./parseDate"

const EventDate = ({ start: startRaw, end: endRaw }) => {
  const start = parseDate(startRaw)
  const end = parseDate(endRaw)
  const span = !start.isSame(end, "day")

  return (
    <div>
      <p>
        {start.format("D")}
        {span && end.format("-D")}
      </p>
      <p>
        {start.format("ddd")}
        {span && end.format("-ddd")}
      </p>
    </div>
  )
}

export default EventDate

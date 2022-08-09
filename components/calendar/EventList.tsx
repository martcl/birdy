import React from "react"

import parseDate from "./parseDate"
import EventItem from "./EventItem"

import moment from "moment"


const Month = ({ children }) => (
  <h2>
    {children}
  </h2>
)

const currentFilter = (events) =>
  events.filter((item) => parseDate(item.end).isSameOrAfter(moment(), "day"))

const EventList = ({ events = [] }) => {
  const currentEvents = currentFilter(events)
  if (currentEvents.length < 1) {
    return <div className="nothing">Terminlisten er tom.</div>
  }

  let currentMonth: number | null = null

  const monthRow = function monthRow(date: string) {
    const thisMonth = new Date(date).getMonth()
    if (currentMonth === thisMonth) {
      return null
    }
    currentMonth = thisMonth
    return <Month>{parseDate(date).format("MMMM")}</Month>
  }

  return (
    <div>
      {currentEvents.map((item) => (
        <React.Fragment key={item.id}>
          {monthRow(item.start)}
          <EventItem data={item} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default EventList

import Link from "next/link"
import React from "react"

export const Calendars = ({ calendars = [] }) => (
  <div>
    {calendars.map(({ node: calendar }) => {
      const slugs = calendar.slug.split("/")
      const isMain = slugs.length === 1
      return (
        <Link
          href={`/program/${calendar.slug}/`}
        >
          {isMain ? (
            <>
              <strong>{calendar.name}</strong>
              {calendar.nameExt}
            </>
          ) : (
            calendar.name
          )}
        </Link>
      )
    })}
  </div>
)

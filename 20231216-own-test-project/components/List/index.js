import { useState, useEffect } from "react";

export default function List({ storedActivities }) {
  console.log(storedActivities);
  const activities = JSON.parse(storedActivities);

  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name} {activity.isForGoodWeather.toString()}
          </li>
        ))}
      </ul>
    </>
  );
}

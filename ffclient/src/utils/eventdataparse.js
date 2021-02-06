import _, { toInteger } from "lodash";

export const parseData = (
  variety,
  sowing_time,
  days_to_maturity,
  springLastFrostDayInMs
) => {
  const timeToSowArr = _.dropRight(
    sowing_time.replace(/-/g, " ").split(/[\s]/),
    2
  ).map((day) => {
    return day * 7;
  });
  const timeToSowAvgInMs =
    timeToSowArr.length === 2
      ? ((timeToSowArr[0] + timeToSowArr[1]) / 2) * 86400000
      : timeToSowArr[0] * 86400000;
  const dayToPlantInMs = springLastFrostDayInMs - timeToSowAvgInMs;
  const dayToPlant = new Date(dayToPlantInMs);
  const harvestDayArr = days_to_maturity
    .replace(/-/g, " ")
    .split(/[\s]/)
    .map((day) => {
      return toInteger(day);
    });
  const harvestDayAvgInMs =
    harvestDayArr.length === 2
      ? ((harvestDayArr[0] + harvestDayArr[1]) / 2) * 86400000
      : harvestDayArr[0] * 86400000;
  const dayToHarvestInMs = dayToPlantInMs + harvestDayAvgInMs;
  const dayToHarvest = new Date(dayToHarvestInMs);
  const dayToHarvestString = dayToHarvest.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dayToPlantString = dayToPlant.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const eventObject = {
    name: variety,
    begin_time: dayToPlantInMs,
    planting_day: dayToPlantString,
    harvest_day: dayToHarvestString,
  };
  return eventObject;
};

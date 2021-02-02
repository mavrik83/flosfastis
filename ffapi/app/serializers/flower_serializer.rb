class FlowerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :variety, :indoor_sowing_date, :outdoor_sowing_date, :grow_height, :spread, :soil, :sun_light, :days_to_germination, :soil_temp, :planting_depth, :weeks_to_transplant, :annual, :perennial
end

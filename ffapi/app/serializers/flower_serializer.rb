class FlowerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :variety, :sowing_time, :soil_temp, :planting_depth, :grow_height, :spread, :sun_light, :annual, :sow_indoors, :transplant, :days_to_maturity, :user_created
end

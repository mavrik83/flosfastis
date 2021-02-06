class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :begin_time, :planting_day, :harvest_day
end

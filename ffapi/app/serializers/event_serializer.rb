class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :begin_time, :planting_day, :harvest_day
end

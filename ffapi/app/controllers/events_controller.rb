class EventsController < ApplicationController
  def index
    events = Event.all

    render json: EventSerializer.new(events)
  end

  def create
    event = Event.new(event_params)

    event.save
    render json: EventSerializer.new(event)
  end

  def destroy
    event = Event.find(params[:id])
    event.delete
  end

  private

  def event_params
    params.require(:event).permit(:name, :location, :begin_time, :harvest_day, :planting_day)
  end
end

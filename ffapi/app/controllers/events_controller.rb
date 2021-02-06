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

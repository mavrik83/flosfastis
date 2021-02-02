class FlowersController < ApplicationController
  def index
    flowers = Flower.all

    render json: FlowerSerializer.new(flowers)
  end

end

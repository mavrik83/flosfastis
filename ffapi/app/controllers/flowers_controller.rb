class FlowersController < ApplicationController
  def index
    flowers = Flower.all

    render json: FlowerSerializer.new(flowers)
  end

  def show
    flower = Flower.find_by(id: params[:id])

  def create
    flower = Flower.new(flower_params)
    flower.user_created = true
    flower.save
    render json: FlowerSerializer.new(flower)
  end

  private

  def flower_params
    params.require(:flower).permit(:id, :variety, :sowing_time, :soil_temp, :planting_depth, :grow_height, :spread, :sun_light, :annual, :sow_indoors, :transplant, :days_to_maturity, :user_created)
  end
end

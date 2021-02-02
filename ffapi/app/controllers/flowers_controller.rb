class FlowersController < ApplicationController
  def index
    flowers = Flower.all

    render json: FlowerSerializer.new(flowers)
  end

  def show
    flower = Flower.find_by(id: params[:id])

    render json: FlowerSerializer.new(flower)
  end

  private

  def flower_params
    params.require(:flower).permit(:id)
  end
end

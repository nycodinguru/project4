class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items
  end

  def create
    item = Item.create!(item_params)
    render json: item
  end

  def show
    item = Item.find(params[:id])
    render json: item
  end

  def update
    item = Item.find(params[:id])
    item.update!(item_params)
    render json: item
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy!
    render plain: "Item ELIMINATED"
  end

  private

  def item_params
    params.require(:item).permit(:item_num, :name, :specs, :price, :description, :image, :availability)
  end
end

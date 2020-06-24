class ListsController < ApplicationController
  def index
    lists = List.all.order(created_at: :desc)
    render json: lists
  end

  def create 
    lists = List.create!(lists_params)
    if lists
      render json: lists
    else
      render json: lists.errors
    end
  end

  def update
    lists = set_list.update(time: Time.now.strftime("%I:%M %p"), checked: true)
  end

  private

  def lists_params
    params.permit(:description, :avatar)
  end

  def set_list
    @list = List.find(params[:id])
  end
end

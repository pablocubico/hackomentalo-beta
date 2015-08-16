class Api::V1::BallotsController < ApplicationController
  respond_to :json

  def show
    render json: Ballot.first
  end
end
class Api::V1::PagesController < ApplicationController
  respond_to :json

  def show
    render json: Page.first
  end
end
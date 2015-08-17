class Api::V1::PagesController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def show
    render json: Page.first
  end

  def create
    page = Page.create(url: params[:page][:url])
    render json: page
  end

end
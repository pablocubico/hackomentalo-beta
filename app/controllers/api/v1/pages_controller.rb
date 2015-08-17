class Api::V1::PagesController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def show
    render json: Page.find(params[:id])
  end

  def create
    parsed_page = MetaInspector.new(params[:page][:url], download_images: false)
    page = Page.find_or_create_by(url: params[:page][:url])
    render json: page
  end

end
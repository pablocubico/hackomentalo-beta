class Api::V1::PagesController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def index
    render json: Page.last(5).reverse
  end

  def show
    render json: Page.find(params[:id])
  end

  def create
    parsed_page = MetaInspector.new(params[:page][:url], download_images: false)
    page = Page.create_with(title: parsed_page.best_title, host: parsed_page.host).find_or_create_by(url: params[:page][:url])
    render json: page
  end

end
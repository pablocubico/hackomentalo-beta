class Api::V1::ShortController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def show
    sl = ShortenedLink.find_by_unique_key(params[:unique_key])
    page = Page.find_by_url(sl.url)
  end

end
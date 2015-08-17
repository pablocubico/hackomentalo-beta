class Api::V1::CommentsController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def create
    comment = Comment.create(message: params[:comment][:message], page_id: params[:comment][:page_id])
    render json: comment
  end

end
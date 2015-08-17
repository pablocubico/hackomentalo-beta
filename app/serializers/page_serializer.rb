class PageSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :url, :created_at
  has_many :comments, serializer: CommentSerializer
end
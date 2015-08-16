class PageSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :url
  has_many :comments, serializer: CommentSerializer
end
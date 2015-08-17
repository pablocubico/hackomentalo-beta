class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :color, :created_at
end
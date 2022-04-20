class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :post_id, :user_id, :created_at, :user, :post
end

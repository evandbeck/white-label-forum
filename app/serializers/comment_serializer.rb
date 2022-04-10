class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :post_id, :user_id
end

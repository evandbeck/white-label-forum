class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :subforum_id, :user_id, :created_at, :user
end

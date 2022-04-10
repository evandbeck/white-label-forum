class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :subforum_id, :user_id
end

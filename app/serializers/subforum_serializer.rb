class SubforumSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :posts
end

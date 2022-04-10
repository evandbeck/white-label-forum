class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :description
      t.integer :subforum_id
      t.integer :user_id

      t.timestamps
    end
  end
end

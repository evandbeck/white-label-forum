class CreateSubforums < ActiveRecord::Migration[6.1]
  def change
    create_table :subforums do |t|
      t.string :name
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end

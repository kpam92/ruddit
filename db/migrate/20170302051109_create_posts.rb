class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title, null:false
      t.text :body
      t.string :image_url
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end

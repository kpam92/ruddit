class CreateTextPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :text_posts do |t|
      t.string :title, null:false
      t.text :body
      t.integer :author_id, null:false
      t.integer :vote, nulll:false
      t.timestamps
    end
    add_index :text_posts, :author_id
  end
end

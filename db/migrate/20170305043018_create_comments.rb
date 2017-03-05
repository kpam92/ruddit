class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.integer :comment_id
      t.text :body, null: false
      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :comment_id
  end
end

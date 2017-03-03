class CreateLinkPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :link_posts do |t|
      t.string :title, null: false
      t.string :link_url, null: false
      t.timestamps
    end
  end
end

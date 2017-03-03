class CreateLinkPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :link_posts do |t|

      t.timestamps
    end
  end
end

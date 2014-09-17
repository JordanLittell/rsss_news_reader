class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :feed_id, null: false
      t.timestamps
    end
    
    add_index :likes, :user_id
    add_index :likes, :feed_id
    add_index :likes, [:user_id, :feed_id], unique: true
  end
end

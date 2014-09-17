class Like < ActiveRecord::Base
  validates :user_id, :feed_id, presence: true
  validates :user_id, uniqueness: { scope: :feed_id, message: "You can only like a feed once!"}
end

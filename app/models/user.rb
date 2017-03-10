class User < ApplicationRecord
  validates :username, :session_token, :password_digest, null: false
  validates :username, :session_token, uniqueness: true
end

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, null: false
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token
end

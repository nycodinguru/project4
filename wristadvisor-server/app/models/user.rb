class User < ApplicationRecord
  PASSWORD_LENGTH = (1..25)
  EMAIL_LENGTH = (5..200)

  validates_presence_of :email
  validates :email, length: EMAIL_LENGTH, uniqueness: true

  validates :password, length: PASSWORD_LENGTH, allow_nil: true

  has_one :cart

  attr_reader :password

  def self.find_from_credentials(email, password)
    user = find_by(email: email)
    return nil unless user
    user if user.is_password?(password)
  end

  def is_password?(password_attempt)
    BCrypt::Password.new(password_digest).is_password?(password_attempt)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end

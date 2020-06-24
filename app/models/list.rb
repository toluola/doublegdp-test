class List < ApplicationRecord
  validates :description, :avatar, presence: true
end

class Board < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  scope :ordered, -> { order('lower(name)') }
end

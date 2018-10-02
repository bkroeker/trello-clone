class Board < ApplicationRecord
  has_many :columns, -> { order(:position) }, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  scope :ordered, -> { order(arel_table[:name].lower) }
end

class Column < ApplicationRecord
  acts_as_list scope: :board

  belongs_to :board
  has_many :tasks, -> { order(:position) }, dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :board_id }
end

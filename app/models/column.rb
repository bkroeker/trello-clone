class Column < ApplicationRecord
  belongs_to :board

  validates :name, presence: true, uniqueness: { scope: :board_id }
end

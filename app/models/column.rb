class Column < ApplicationRecord
  acts_as_list scope: :board

  belongs_to :board

  validates :name, presence: true, uniqueness: { scope: :board_id }
end

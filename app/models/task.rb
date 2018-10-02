class Task < ApplicationRecord
  acts_as_list scope: :column

  belongs_to :column

  validates :name, presence: true, uniqueness: { scope: :column_id }
end
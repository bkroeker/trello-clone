FactoryBot.define do
  factory :column do
    board
    name { FFaker::Name.unique.name }
  end
end

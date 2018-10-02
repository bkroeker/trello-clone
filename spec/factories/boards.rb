FactoryBot.define do
  factory :board do
    name { FFaker::Name.unique.name }
  end
end

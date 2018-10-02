require 'rails_helper'

RSpec.describe Board, type: :model do
  subject { create :board }

  it 'requires a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end
end

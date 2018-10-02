require 'rails_helper'

RSpec.describe Column, type: :model do
  subject { create :column }

  it 'requires a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'starts positionining at 1' do
    expect(subject.position).to eq(1)
  end

  describe 'second column' do
    let(:board) { create :board }
    let!(:column) { create :column, board: board, name: 'Guacamole Recipes' }
    subject { create :column, board: board }

    it 'requires a unique name' do
      subject.name = 'Guacamole Recipes'
      expect(subject).to_not be_valid
    end

    it 'acquires a position of 2' do
      expect(subject.position).to eq(2)
    end
  end

  describe 'column on a different board' do
    let!(:column) { create :column, name: 'Guacamole Recipes' }
    subject { create :column }

    it 'can reuse name' do
      subject.name = 'Guacamole Recipes'
      expect(subject).to be_valid
    end

    it 'acquires a position of 1' do
      expect(subject.position).to eq(1)
    end
  end
end

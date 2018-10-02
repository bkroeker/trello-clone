require 'rails_helper'

RSpec.describe BoardsController, type: :controller do
  let!(:board) { create :board }

  describe "GET #index" do
    before { get :index, format: :json }

    it "responds with success" do
      expect(response).to be_successful
    end

    it 'returns json' do
      json = JSON.parse(response.body)
      expect(json.first['id']).to eq(board.id)
    end
  end
end

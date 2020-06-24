require "rails_helper"

RSpec.describe "Lists API", type: :request do
  let!(:lists) { create(:list) }
  let(:list_id) { lists.id }

  describe "GET /lists" do
    before { get "/lists" }

    it "returns status code 200" do
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /lists" do

    context "when the request is valid" do
      before { post "/lists/create", params: { description: "Wash dishes" } }
      it "creates a fixture" do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "PATCH /lists/:id" do

    context "when the request is valid" do
      before { patch "/lists/#{list_id}" }
      it "creates a fixture" do
        expect(response).to have_http_status(204)
      end
    end
  end

end
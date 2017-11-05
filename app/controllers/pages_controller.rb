class PagesController < ApplicationController
  layout "angular"
  def index
  end

  def show
  	 render	template: "pages/#{params[:page]}"
  end
end

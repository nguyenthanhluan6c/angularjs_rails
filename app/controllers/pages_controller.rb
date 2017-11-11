class PagesController < ApplicationController
  layout "angular/application"
  def index
  end

  def show
  	 render	template: "pages/#{params[:page]}"
  end
end

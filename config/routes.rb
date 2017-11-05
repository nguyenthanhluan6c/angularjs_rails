Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root "pages#show", page: "home"
  get 'pages/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

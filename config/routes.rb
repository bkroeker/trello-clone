Rails.application.routes.draw do
  resources :boards

  root to: 'pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

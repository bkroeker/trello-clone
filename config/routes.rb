Rails.application.routes.draw do
  shallow do
    resources :boards do
      resources :columns
    end
  end

  root to: 'pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

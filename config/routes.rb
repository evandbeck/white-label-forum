Rails.application.routes.draw do
  
  resources :friends, only: [:index]
  resources :comments, only: [:show, :create, :update, :destroy]
  resources :posts
  resources :users, only: [:show, :create]
  resources :subforums

  resources :posts do
    resources :comments, only: [:index, :create, :update, :destroy] 
  end

  resources :subforums do
    resources :posts, only: [:index, :create, :update, :destroy] 
  end

  post '/login', to: 'sessions#create'

  get '/authorized_user', to: 'users#show'

  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

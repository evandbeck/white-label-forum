Rails.application.routes.draw do
  
  resources :friends, only: [:index]
  resources :comments, only: [:create, :update, :destroy]
  resources :posts, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index]
  resources :subforums

  resources :posts do
    resources :comments, only: [:index] 
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # get "/subforum/posts", to: "subforums#subforum_posts"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

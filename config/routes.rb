NewsReader::Application.routes.draw do

  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end

  end
  resources :users, only: [:create, :update, :show, :new]
  resource :session, only: [:create, :destroy, :new]
  resources :likes, only: [:create, :destroy]
  root to: "static_pages#index"
end

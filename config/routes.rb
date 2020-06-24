Rails.application.routes.draw do
  root 'homepage#index'
  post "lists/create"
  get "lists/index"
  patch "/lists/:id", to: "lists#update"
  get '/*path' => 'homepage#index'
end

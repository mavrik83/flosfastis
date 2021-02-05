# frozen_string_literal: true

Rails.application.routes.draw do
  resources :flowers
  resources :schedules
  get '/scrape/:zipCode' => 'scrape#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

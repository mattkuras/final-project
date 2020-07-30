class Cart < ApplicationRecord
  has_many :guitars, through: :items
  has_many :items 
end

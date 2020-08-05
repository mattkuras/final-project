class Cart < ApplicationRecord
  has_many :items 
  has_many :guitars, through: :items


end

class Guitar < ApplicationRecord
    has_many :items
    has_many :carts, through: :items
end

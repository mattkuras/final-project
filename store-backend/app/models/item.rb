class Item < ApplicationRecord
  belongs_to :cart
  belongs_to :guitar
end

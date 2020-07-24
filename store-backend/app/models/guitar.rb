class Guitar < ApplicationRecord
    belongs_to :cart, optional: true 
end

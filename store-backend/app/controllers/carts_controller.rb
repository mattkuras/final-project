class CartsController < ApplicationController
    
    def index 
        @carts = Cart.all 
        render json: @carts, include: [:guitars]
    end

    def show
        @cart = Cart.all.find_by(id: params[:id])
        render json: @cart, include: [:guitars] 
    end

end

class CartsController < ApplicationController
    
    def index 
        @carts = Cart.all 
        render json: @carts, include: [:items]
    end

    def show
        @cart = Cart.all.find_by(id: params[:id])
        render json: @cart, include: [:items] 
    end

end

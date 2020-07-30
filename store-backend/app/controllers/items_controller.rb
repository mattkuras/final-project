class ItemsController < ApplicationController
    skip_before_action :verify_authenticity_token 

    def index
        byebug
        @items = Item.all
        render json: @items, except: [:updated_at, :created_at] 
    end

    def create
        @item = Item.new(guitar_id: params[:id], cart_id: 1)
        byebug
        if @item.save 
            render json: @item 
        else 
            render json: {error: 'error saving item'}
        end
    end

    private

    def item_params
        params.require(:item).permit(
            :cart_id,
            :guitar_id
        )
    end

end

class ItemsController < ApplicationController
    skip_before_action :verify_authenticity_token 

    def index

        @items = Item.all
        render json: @items, except: [:updated_at, :created_at], include: [:guitar]
    end

    def create
 
        @item = Item.new(guitar_id: params[:id], cart_id: 1)
        
        if @item.save 
            render json: @item, include: [:guitar]
        else 
            render json: {error: 'error saving item'}
        end
    end

    def destroy 
   
        @item = Item.all.find_by(id: params[:id])
        @item.destroy 
        render json: @item, include: [:guitar]
    end 

    private

    def item_params
        params.require(:item).permit(
            :cart_id,
            :guitar_id
        )
    end

end

class GuitarsController < ApplicationController
    def index
        @guitars = Guitar.all
        render json: @guitars, except: [:updated_at, :created_at]
    end
    def show 
        guitar = Guitar.all.find_by(id: params[:id])
        render json: guitar, except: [:updated_at, :created_at]
    end


    private 
    def guitar_params
        params.require(:guitar).require(
            :name,
            :description,
            :price,
            :image,
            :in_stock
        )
    end
end

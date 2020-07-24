class GuitarsController < ApplicationController
    def index
        @guitars = Guitar.all
        render json: @guitars
    end
    def show 
        @guitar = Guitar.all.find_by(id: params[:id])
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

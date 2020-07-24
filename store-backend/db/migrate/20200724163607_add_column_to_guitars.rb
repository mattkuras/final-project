class AddColumnToGuitars < ActiveRecord::Migration[6.0]
  def change
    add_column :guitars, :image, :string
    add_column :guitars, :in_stock, :boolean, default: true 
  end
end

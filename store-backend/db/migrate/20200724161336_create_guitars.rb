class CreateGuitars < ActiveRecord::Migration[6.0]
  def change
    create_table :guitars do |t|
      t.string :name
      t.string :description
      t.float :price

      t.timestamps
    end
  end
end

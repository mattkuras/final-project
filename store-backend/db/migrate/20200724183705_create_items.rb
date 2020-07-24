class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.references :cart, null: false, foreign_key: true
      t.references :guitar, null: false, foreign_key: true

      t.timestamps
    end
  end
end

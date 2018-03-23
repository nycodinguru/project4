class CreateCreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :item_num
      t.string :name
      t.string :description
      t.float :price
      t.string :specs
      t.string :image
      t.boolean :availability


      t.timestamps
    end
  end
end

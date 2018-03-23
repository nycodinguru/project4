class CreateCreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :order_num
      t.integer :item_num

      t.belongs_to :cart, index: true
      t.timestamps
    end
  end
end

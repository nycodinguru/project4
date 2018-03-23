class CreateCreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.integer :item_num


      t.belongs_to :user, index: true
      #t.has_many :order, index: true
    end
  end
end

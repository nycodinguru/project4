class Item < ApplicationRecord
  validates :item_num, :name, :description, :price, :specs, :image, presence: true
  validates :item_num, :price, numericality: true
  validates :availability, inclusion: { in: [true, false] }
end

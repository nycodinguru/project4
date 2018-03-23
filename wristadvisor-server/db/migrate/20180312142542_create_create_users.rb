class CreateCreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :fname
      t.string :lname
      t.string :address

      t.has_one :cart, index: true
      t.timestamps
    end
  end
end

class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :description, null: false
      t.string :time
      t.string :avatar, default: "https://res.cloudinary.com/dvcc8ctjw/image/upload/v1592741995/icons8-user-24.png"
      t.boolean :checked, default: false

      t.timestamps
    end
  end
end

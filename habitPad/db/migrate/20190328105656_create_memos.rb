class CreateMemos < ActiveRecord::Migration[5.0]
  def change
    create_table :memos do |t|
      t.string :detail
      t.string :item
      t.time :crate_user
      t.string :create_user
      t.time :update_user
      t.time :update_time

      t.timestamps
    end
  end
end

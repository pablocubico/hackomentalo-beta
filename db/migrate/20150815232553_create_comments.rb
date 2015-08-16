class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :page, index: true
      t.text :message

      t.timestamps
    end
  end
end
